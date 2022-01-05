import { cartActionTypes } from "./cart.types";

const INITIAL_VALUES = {
    cartItems: []
};

const cartReducer = (state = INITIAL_VALUES, action) => {
    switch (action.type) {
        case cartActionTypes.SET_CART_ITEMS:
          return {...state, cartItems: action.payload}    
        default:
            return state
    }
}

export default cartReducer;