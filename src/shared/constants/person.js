const PERSON = {
  ADMIN    : {type: 'admin', label: 'Admins'},
  COUNSELOR: {type: 'counselor', label: 'Counselors'},
  USER     : {type: 'user', label: 'Users'},
  DETAINEE : {type: 'detainee', label: 'Detainees'},
}

export const ALL = [
  PERSON.ADMIN,
  PERSON.COUNSELOR,
  PERSON.USER,
  PERSON.DETAINEE
];

export default PERSON;