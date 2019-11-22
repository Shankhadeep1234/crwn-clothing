import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const midddlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...midddlewares));

export default store;
