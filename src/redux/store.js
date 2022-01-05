import { createStore, applyMiddleware } from "redux";
import persistReducer from "./rootReducers";
import logger from "redux-logger";
import { persistStore } from "redux-persist"

import creatSagaMiddlware from "redux-saga";

const sagaMiddleware = creatSagaMiddlware();
const middlewears = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middlewears.push(logger);
}

export const store = createStore(persistReducer, applyMiddleware(...middlewears));

export const persistor = persistStore(store);

const storeObj  = {store, persistor}

export default storeObj;
