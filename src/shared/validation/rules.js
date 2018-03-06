import * as ErrorMessages from './errors.js';

export const required = (text) => {
  if (text) {
    return null;
  } else {
    return ErrorMessages.isRequired;
  }
};

export const mustMatch = (field, fieldName) => {
  return (text, state) => {
    return state[field] === text ? null : ErrorMessages.mustMatch(fieldName);
  };
};

export const minLength = (length) => {
  return (text) => {
    return text.length >= length ? null : ErrorMessages.minLength(length);
  };
};

export const maxLength = (length) => {
  return (text) => {
    return text.length < length ? null : ErrorMessages.maxLength(length);
  };
};

export const exactLengthAlphanumeric = (length) => {
  return (text) => {
    return text.split(/[^a-zA-Z0-9]/).join('').length === length ? null : ErrorMessages.exactLengthAlphanumeric(length);
  };
};

export const atLeastOneAlphaOneNumeric = (text) => {
  const re = new RegExp(/^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i);
  return re.test(text) ? null : ErrorMessages.atLeastOneAlphaOneNumeric;
};
