import { createSelector } from "@reduxjs/toolkit";

const selectCart = state => state.cart;

export const selectCartTotal = createSelector(
    selectCart,
    (cart) => cart.cartItems.reduce((total, item) => total + item.price , 0)
);

export const selectCartItems = createSelector(
    selectCart,
    (cart) => cart.cartItems
);



