import { ADD_PERSON, DELE_PERSON } from "../actions/Person";
import produce from "immer";

const defaultValue = {
  num: 0,
};

export default function Person(state = defaultValue, action) {
  const { type } = action;
  switch (type) {
    case ADD_PERSON:
      return produce(state, (draft) => {
        draft.num++;
      });
    case DELE_PERSON:
      return produce(state, (draft) => {
        draft.num--;
      });
    default:
      return state;
  }
}
