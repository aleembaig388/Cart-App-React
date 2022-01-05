import { cartActionTypes } from "./cart.types";

export const setCartItem = cartItems => ({
    type: cartActionTypes.SET_CART_ITEMS,
    payload: cartItems
});