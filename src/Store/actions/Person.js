export const ADD_PERSON = "ADD_PERSON";
export const DELE_PERSON = "DELETE_PERSON";

export function DisPatchAddPerson() {
  return {
    type: ADD_PERSON,
  };
}
export function DisPatchDeletePerson() {
  return {
    type: DELE_PERSON,
  };
}
