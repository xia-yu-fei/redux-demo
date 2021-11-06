import { ON_CHANGE, ON_CLICK_BUTTON, DELETE_CUR_ITEM } from "./actionType";

export function DispatchOnChangeInput(value) {
  return {
    type: ON_CHANGE,
    value,
  };
}

export function DispatchOnClickButton(value) {
  return {
    type: ON_CLICK_BUTTON,
    value,
  };
}

export function DispatchOnClickItems(index) {
  return {
    type: DELETE_CUR_ITEM,
    value: index,
  };
}
