import { combineReducers, createStore } from "redux";
import { authReducer } from "./auth/auth.reducers";
import pageReducer from "./pages/page.reducers";

const rootReducer = combineReducers({
  pages: pageReducer,
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
