import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
import TodoListReducer from "./reducers/TodoList";
import PersonReducer from "./reducers/Person";

const allReducer = combineReducers({
  todo: TodoListReducer,
  person: PersonReducer,
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPONSE__
//   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPONSE__({})
//   : compose;
// const enhancer = composeEnhancers(applyMiddleware(thunk));

const Store = createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)));

export default Store;
