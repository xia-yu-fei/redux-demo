import produce from "immer";
import {
  ON_CHANGE,
  ON_CLICK_BUTTON,
  DELETE_CUR_ITEM,
  GET_LIST,
} from "../actions/TodoList";

const defaultValue = {
  inputValue: "",
  listData: [],
};

const reducer = (state = defaultValue, action) => {
  const { type, value, data } = action;
  function UseImmer(updateState) {
    return produce(state, updateState);
  }
  switch (type) {
    case ON_CHANGE:
      return UseImmer((draft) => {
        draft.inputValue = value;
      });
    case ON_CLICK_BUTTON:
      return UseImmer((draft) => {
        draft.listData.push(value);
        draft.inputValue = "";
      });
    case DELETE_CUR_ITEM:
      return UseImmer((draft) => {
        draft.listData.splice(value, 1);
      });
    case GET_LIST:
      return UseImmer((draft) => {
        draft.listData = data;
      });
    default:
      return state;
  }
};

export default reducer;
