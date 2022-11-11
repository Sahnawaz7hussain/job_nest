


import { applyMiddleware, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./AppReducer/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(reducer, composeEnhancers(applyMiddleware(thunk))
);

