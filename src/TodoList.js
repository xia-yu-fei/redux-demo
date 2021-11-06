import { Component } from "react";
import TodoListUI from "./TodoListUI";
import Store from "./Store";
import {
  DispatchOnChangeInput,
  DispatchOnClickButton,
  DispatchOnClickItems,
  getList,
} from "./Store/actionCreator";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = Store.getState();
    this.onChangeInput = this.onChangeInput.bind(this);
    this.stateChange = this.stateChange.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
    this.onClickItems = this.onClickItems.bind(this);
    Store.subscribe(this.stateChange);
  }
  render() {
    const { imputValue, listData } = this.state;
    return (
      <TodoListUI
        imputValue={imputValue}
        listData={listData}
        onChangeInput={this.onChangeInput}
        onClickButton={this.onClickButton}
        onClickItems={this.onClickItems}
      />
    );
  }
  componentDidMount() {
    const actionCallback = getList();
    Store.dispatch(actionCallback);
  }

  onChangeInput(e) {
    const action = DispatchOnChangeInput(e.target.value);
    Store.dispatch(action);
  }
  onClickButton() {
    const { imputValue } = this.state;
    if (imputValue && imputValue.replaceAll(" ", "")) {
      const action = DispatchOnClickButton(imputValue);
      Store.dispatch(action);
    }
  }
  onClickItems(index) {
    const action = DispatchOnClickItems(index);
    Store.dispatch(action);
  }
  stateChange() {
    this.setState(Store.getState());
  }
}

export default TodoList;
