import {CALL_API} from '../../middlewares/api';

export const QUESTIONS_RECEIVED = Symbol('QUESTIONS_RECEIVED');
export const QUESTION_RECEIVED  = Symbol('QUESTION_RECEIVED');
export const QUESTION_POSTED    = Symbol('QUESTION_POSTED');
export const QUESTION_PATCHED   = Symbol('QUESTION_PATCHED');
export const QUESTION_DELETED   = Symbol('QUESTION_DELETED');

export function getQuestions(afterSuccess, afterError) {
  console.log('getQuestions')
  return {
    [CALL_API]: {
      method     : 'get',
      path       : '/api/question',
      successType: QUESTIONS_RECEIVED,
      afterSuccess,
      afterError
    }
  };
}

export function getQuestion(params, afterSuccess, afterError) {
  console.log('getQuestion', params)
  return {
    [CALL_API]: {
      method     : 'get',
      path       : `/api/question/${params.id}`,
      successType: QUESTION_RECEIVED,
      afterSuccess,
      afterError
    }
  };
}

export function postQuestion(params, afterSuccess, afterError) {
  console.log('postQuestion', params)
  return {
    [CALL_API]: {
      method     : 'post',
      body       : params,
      path       : `/api/question`,
      successType: QUESTION_POSTED,
      afterSuccess,
      afterError
    }
  };
}

export function patchQuestion(params, afterSuccess, afterError) {
  console.log('patchQuestion', params)
  return {
    [CALL_API]: {
      method     : 'patch',
      body       : params,
      path       : `/api/question/${params.id}`,
      successType: QUESTION_PATCHED,
      afterSuccess,
      afterError
    }
  };
}

export function deleteQuestion(params, afterSuccess, afterError) {
  console.log('deleteQuestion', params)
  return {
    [CALL_API]: {
      method     : 'delete',
      path       : `/api/question/${params.id}`,
      successType: QUESTION_DELETED,
      afterSuccess,
      afterError
    }
  };
}
