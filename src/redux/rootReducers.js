import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import storage from "redux-persist/es/storage";
import { persistReducer }  from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducers = combineReducers({
    cart: cartReducer
});

export default persistReducer(persistConfig, rootReducers)


