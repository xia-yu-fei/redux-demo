import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import saga from "redux-saga";
import mySages from "./sagas";
import reducer from "./reducer";

const sagaMiddle = saga();

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPONSE__
//   ? window.__REDUX_DEVTOOLS_EXTENSION_COMPONSE__({})
//   : compose;
// const enhancer = composeEnhancers(applyMiddleware(thunk));

const Store = createStore(reducer, applyMiddleware(sagaMiddle));

sagaMiddle.run(mySages);

export default Store;
