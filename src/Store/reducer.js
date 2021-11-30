import {
  ON_CHANGE,
  ON_CLICK_BUTTON,
  DELETE_CUR_ITEM,
  GET_LIST,
} from "./actionType";

const defaultValue = {
  inputValue: "",
  listData: ["早8点", "早9点", "早10点"],
};

const reducer = (state = defaultValue, action) => {
  const { type, value, data } = action
  console.log('action',action);
  const newState = JSON.parse(JSON.stringify(state));
  switch (type) {
    case ON_CHANGE:
      newState.inputValue = value;
      return newState;
    case ON_CLICK_BUTTON:
      newState.listData.push(value);
      newState.inputValue = "";
      return newState;
    case DELETE_CUR_ITEM:
      newState.listData.splice(value, 1);
      return newState;
    case GET_LIST:
      newState.listData = data;
      return newState;
    default:
      return state;
  }
};

export default reducer;
