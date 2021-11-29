import {
  ON_CHANGE,
  ON_CLICK_BUTTON,
  DELETE_CUR_ITEM,
  GET_LIST,
} from "./actionType";

export function DispatchOnChangeInput(e) {
  return {
    type: ON_CHANGE,
    value: e.target.value,
  };
}

export function DispatchOnClickButton(value) {
  if (value && value.replaceAll(" ", "")) {
    return {
      type: ON_CLICK_BUTTON,
      value,
    };
  }
}

export function DispatchOnClickItems(index) {
  return {
    type: DELETE_CUR_ITEM,
    value: index,
  };
}

export function getListAction(data) {
  return {
    type: GET_LIST,
    data,
  };
}

export function getList() {
  return (dispatch) => {
    setTimeout(() => {
      const data = ["早8点", "早9点", "早10点"];
      const action = getListAction(data);
      dispatch(action);
    }, 500);
  };
}
