import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import logger from "./middlewares/logger.js";
import fakeServer from "./middlewares/fakeServer";
export function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger, fakeServer)
  );
  console.log("state", store.getState());
  return store;
}
