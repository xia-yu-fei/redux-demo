import React from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";

const TodoListUI = (props) => {
  const { inputValue, listData, onChangeInput, onClickButton, onClickItems } =
    props;
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

export default TodoListUI;
