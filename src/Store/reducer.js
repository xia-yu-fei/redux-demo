import { ON_CHANGE, ON_CLICK_BUTTON, DELETE_CUR_ITEM } from "./actionType";

const defaultValue = {
  imputValue: "",
  listData: ["早8点", "早9点", "早10点"],
};

const reducer = (state = defaultValue, action) => {
  const { type, value } = action;
  const newState = JSON.parse(JSON.stringify(state));
  switch (type) {
    case ON_CHANGE:
      newState.imputValue = value;
      return newState;
    case ON_CLICK_BUTTON:
      newState.listData.push(value);
      newState.imputValue = "";
      return newState;
    case DELETE_CUR_ITEM:
      newState.listData.splice(value, 1);
      return newState;
    default:
      return state;
  }
};

export default reducer;
