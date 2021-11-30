import { ADD_PERSON, DELE_PERSON } from "../actions/Person";

const defaultValue = {
  num: 0,
};

export default function (state = defaultValue, action) {
  const { type } = action;
  const newState = JSON.parse(JSON.stringify(state));
  switch (type) {
    case ADD_PERSON:
      newState.num++;
      return newState;
    case DELE_PERSON:
      newState.num--;
      return newState;
    default:
      return state;
  }
}
