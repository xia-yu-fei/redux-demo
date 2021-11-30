import React from "react";
import { connect } from "react-redux";

import {
  DisPatchAddPerson,
  DisPatchDeletePerson,
} from "../Store/actions/Person";

const PersonUI = (props) => {
  const { num, listNum, addPerson, deletePerson } = props;
  return (
    <div>
      <div>總人數：{num}</div>
      <div>縂列表數：{listNum}</div>
      <button onClick={addPerson}>添加一人</button>
      <button onClick={deletePerson}>刪除一人</button>
    </div>
  );
};

export default connect(
  (state) => {
    return {
      num: state.person.num,
      listNum: state.todo.listData.length,
    };
  },
  {
    addPerson: DisPatchAddPerson,
    deletePerson: DisPatchDeletePerson,
  }
)(PersonUI);
