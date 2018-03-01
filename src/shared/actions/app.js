export const MODAL_SHOW = Symbol('MODAL_SHOW');
export const MODAL_HIDE = Symbol('MODAL_HIDE');

export function modalShow(params) {
  const type    = MODAL_SHOW;
  const payload = params.payload;
  return {type, payload};
}

export function modalHide(params) {
  const type    = MODAL_HIDE;
  const payload = params.payload;
  return {type, payload};
}
