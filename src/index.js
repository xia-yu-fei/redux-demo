import React from "react";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import TodoList from "./Container/TodoList";
import Person from "./Container/Person";
import store from "./Store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <TodoList />
    <hr />
    <Person />
  </Provider>
);
