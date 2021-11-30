import TodoListUI from "../Components/TodoListUI";
import { connect } from "react-redux";
import {
  DispatchOnChangeInput,
  DispatchOnClickButton,
  DispatchOnClickItems,
} from "../Store/actionCreator";

export default connect((state) => state, {
  onChangeInput: DispatchOnChangeInput,
  onClickButton: DispatchOnClickButton,
  onClickItems: DispatchOnClickItems,
})(TodoListUI);
