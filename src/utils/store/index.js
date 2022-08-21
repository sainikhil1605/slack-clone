import { combineReducers, createStore } from "redux";
import pageReducer from "./pages/page.reducers";

const rootReducer = combineReducers({
  pages: pageReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
