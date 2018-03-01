import Promise from 'bluebird';
import {camelizeKeys} from 'humps';
import superAgent from 'superagent';
import config from '../../shared/config';

export const CALL_API  = Symbol('CALL_API');
export const CHAIN_API = Symbol('CHAIN_API');

export default ({dispatch, getState}) => (next) => (action) => {
  if (action[CALL_API]) {
    return dispatch({
      [CHAIN_API]: [
        () => action
      ]
    });
  }

  return new Promise(function (resolve, reject) {
    if (!action[CHAIN_API]) {
      return next(action);
    }

    const promiseCreators = action[CHAIN_API].map((actionCreator) => {
      return createRequestPromise(actionCreator, getState, dispatch);
    });

    const overall = promiseCreators.reduce((promise, creator) => {
      return promise.then((body) => {
        return creator(body);
      });
    }, Promise.resolve());

    overall.finally(() => {
      resolve();
    }).catch((error) => {
      reject();
    });
  });
};

function actionWith(action, toMerge) {
  const ret = Object.assign({}, action, toMerge);
  delete ret[CALL_API];
  return ret;
}

function createRequestPromise(actionCreator, getState, dispatch) {
  let params;
  return (prevBody) => {
    const action = actionCreator(prevBody);
    return new Promise(function (resolve, reject) {

      const handleError = (err) => {
        if (params.errorType) {
          dispatch(actionWith(action, {
            type : params.errorType,
            error: err
          }));
        }

        if (typeof params.afterError === 'function') {
          params.afterError({getState});
        }
        reject();
      };

      const handleSuccess = (res) => {
        // Handle success
        const resBody = camelizeKeys(res.body);
        dispatch(actionWith(action, {
          type    : params.successType,
          response: resBody
        }));

        if (typeof params.afterSuccess === 'function') {
          params.afterSuccess({getState});
        }
        resolve(resBody);
      };

      if (!action[CALL_API]) {
        // Handle synchronous actions
        dispatch(action);
        resolve();
      } else {
        // Handle asynchronous actions
        params = extractParams(action[CALL_API]);
        if (params.method === 'get' || params.method === 'delete') {
          superAgent[params.method](params.url)
          .query(params.query)
          .end((err, res) => {
            if (err) {
              handleError(err);
            } else {
              handleSuccess(res);
            }
          });
        } else {
          superAgent[params.method](params.url)
          .type('application/json')
          .accept('application/json')
          .send(params.body)
          .end((err, res) => {
            if (err) {
              handleError(err);
            } else {
              handleSuccess(res);
            }
          });
        }
      }
    });
  };
}

function extractParams(callApi) {
  const {
          method,
          path,
          query,
          body,
          successType,
          errorType,
          afterSuccess,
          afterError
        } = callApi;

  const url = `${config.API_BASE_URL}${path}`;

  return {
    method,
    url,
    query,
    body,
    successType,
    errorType,
    afterSuccess,
    afterError
  };
}
