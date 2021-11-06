import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPONSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPONSE__({})
  : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const Store = createStore(reducer, enhancer);
export default Store;
