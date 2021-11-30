import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import TodoList from "./Container/TodoList";
import store from "./Store";

ReactDOM.render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  document.getElementById("root")
);
