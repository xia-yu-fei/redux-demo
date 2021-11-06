import { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import Store from "./Store";
import {
  DispatchOnChangeInput,
  DispatchOnClickButton,
  DispatchOnClickItems,
} from "./Store/actionCreator";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = Store.getState();
    this.onChangeInput = this.onChangeInput.bind(this);
    this.stateChange = this.stateChange.bind(this);
    this.onClickButton = this.onClickButton.bind(this);
    Store.subscribe(this.stateChange);
  }
  render() {
    const { imputValue, listData } = this.state;
    return (
      <div>
        <div>
          <Input
            placeholder={imputValue}
            value={imputValue}
            onChange={this.onChangeInput}
          />
          <Button type="primary" onClick={this.onClickButton}>
            增加
          </Button>
        </div>
        <div>
          <List
            bordered
            dataSource={listData}
            renderItem={(item, index) => (
              <List.Item onClick={this.onClickItems.bind(this, index)}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </div>
    );
  }
  componentDidUpdate() {
    // console.log("componentDidUpdate", this.state);
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
