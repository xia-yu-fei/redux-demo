import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Input, Button, List } from "antd";
import { createSelector } from "reselect";
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
    num,
    nums,
    reSelectNums,
  } = props;
  useEffect(() => {
    getList();
  }, [getList]);
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
      <div>下方縂人數：{num} </div>
      <div>下方縂人數 * 100：{nums} </div>
      <div>下方縂人數 * 100：{reSelectNums} </div>
    </>
  );
};

function getNums(num) {
  console.log("getNums是否执行 xyf", 1);
  return num * 100;
}

const reGetNums = createSelector(
  (state) => state.person.num,
  (num) => {
    console.log("reGetNums是否执行 xyf", 1);
    return num * 100;
  }
);

export default connect(
  (state) => {
    return {
      ...state.todo,
      num: state.person.num,
      nums: getNums(state.person.num),
      reSelectNums: reGetNums(state),
    };
  },
  {
    onChangeInput: DispatchOnChangeInput,
    onClickButton: DispatchOnClickButton,
    onClickItems: DispatchOnClickItems,
    getList,
  }
)(TodoListUI);
