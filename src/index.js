import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import TodoList from "./Container/TodoList";
import Person from "./Container/Person";
import store from "./Store";

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
    <hr />
    <Person />
  </Provider>,
  document.getElementById("root")
);
