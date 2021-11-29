import React from "react";
import ReactDOM from "react-dom";
// import TodoList from "./TodoList";
import TodoList from "./Container/TodoList";
import { Provider } from "react-redux";
import store from "./Store";

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById("root")
);
