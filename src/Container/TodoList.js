import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";
import {
  DispatchOnChangeInput,
  DispatchOnClickButton,
  DispatchOnClickItems,
  getList,
} from "../Store/actions/TodoList";

const TodoListUI = (props) => {
  const {
    inputValue,
    listData,
    onChangeInput,
    onClickButton,
    onClickItems,
    getList,
  } = props;
  useEffect(() => {
    getList();
  }, []);
  return (
    <>
      <Input
        placeholder={inputValue}
        value={inputValue}
        onChange={onChangeInput}
      />
      <Button type="primary" onClick={() => onClickButton(inputValue)}>
        增加
      </Button>
      <List
        bordered
        dataSource={listData}
        renderItem={(item, index) => (
          <List.Item
            onClick={() => {
              onClickItems(index);
            }}
          >
            {item}
          </List.Item>
        )}
      />
    </>
  );
};

export default connect((state) => state, {
  onChangeInput: DispatchOnChangeInput,
  onClickButton: DispatchOnClickButton,
  onClickItems: DispatchOnClickItems,
  getList,
})(TodoListUI);
