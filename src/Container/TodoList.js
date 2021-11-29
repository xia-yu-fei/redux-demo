import TodoListUI from "../Components/TodoListUI";
import { connect } from "react-redux";
import {
  DispatchOnChangeInput,
  DispatchOnClickButton,
  DispatchOnClickItems,
} from "../Store/actionCreator";

function mapStatetoProps(state) {
  return state;
}
function mapDispatchToProps() {
  return {
    onChangeInput: (value) => ({
      type: "onChange",
      value,
    }),
    onClickButton: DispatchOnClickButton,
    onClickItems: DispatchOnClickItems,
    // onClickButton: (imputValue) => {
    //   if (imputValue && imputValue.replaceAll(" ", "")) {
    //     const action = DispatchOnClickButton(imputValue);
    //     dispatch(action);
    //   }
    // },
    // onClickItems: (index) => {
    //   const action = DispatchOnClickItems(index);
    //   dispatch(action);
    // },
  };
}

export default connect(mapStatetoProps, {
  onChangeInput: DispatchOnChangeInput,
  onClickButton: DispatchOnClickButton,
  onClickItems: DispatchOnClickItems,
})(TodoListUI);
