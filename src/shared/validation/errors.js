export const isRequired = (fieldName) => `${fieldName} is required`;

export const mustMatch = (otherFieldName) => {
  return (fieldName) => `${fieldName} must match ${otherFieldName}`;
};

export const minLength = (length) => {
  return (fieldName) => `${fieldName} must be at least ${length} characters`;
};

export const maxLength = (length) => {
  return (fieldName) => `${fieldName} must be ${length} characters max`;
};

export const exactLengthAlphanumeric = (length) => {
  return (fieldName) => `${fieldName} must be ${length} characters long`;
};

export const atLeastOneAlphaOneNumeric = (fieldName) => `${fieldName} Password must contain at least one letter and number`;
