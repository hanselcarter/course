import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import personReducer from "../reducers/person";
import authReducer from "../reducers/auth";
import resultsReducer from "../reducers/results";

export default () => {
  const store = createStore(
    combineReducers({
      person: personReducer,
      auth: authReducer,
      results: resultsReducer
    }),
    applyMiddleware(thunk)
  );

  return store;
};
