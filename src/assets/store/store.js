import logger from "redux-logger";
import reducer from "./reducers/reducer";
import {
    applyMiddleware,
    legacy_createStore as createStore,
  } from "redux";
import { thunk } from "redux-thunk";

export const myStore=createStore(reducer,applyMiddleware(thunk,logger))