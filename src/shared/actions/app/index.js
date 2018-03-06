export const MODAL_SHOW = Symbol('MODAL_SHOW');
export const MODAL_HIDE = Symbol('MODAL_HIDE');
export const ALERT_SHOW = Symbol('ALERT_SHOW');
export const ALERT_HIDE = Symbol('ALERT_HIDE');


export function modalShow(params) {
  const type    = MODAL_SHOW;
  const payload = params.payload;
  return {type, payload};
}

export function modalHide() {
  const type = MODAL_HIDE;
  return {type};
}

export function alertShow(params) {
  const type    = ALERT_SHOW;
  const payload = params.payload;
  return {type, payload};
}

export function alertHide() {
  const type = ALERT_HIDE;
  return {type};
}
