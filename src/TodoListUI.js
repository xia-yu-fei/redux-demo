import React from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";

const TodoListUI = (props) => {
  const { imputValue, listData, onChangeInput, onClickButton, onClickItems } =
    props;
  return (
    <>
      <Input
        placeholder={imputValue}
        value={imputValue}
        onChange={onChangeInput}
      />
      <Button type="primary" onClick={onClickButton}>
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
