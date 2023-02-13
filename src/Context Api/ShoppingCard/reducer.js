import React from "react";
import {
  handleAddToCart,
  handleRemoveCartItem,
  handleReduceCartItem,
  getTotalprice,
  getTotalQuantity,
} from "./utils";

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "APP/ADD_TO_CART":
      return {
        ...state,
        cart: handleAddToCart({
          prevCartItems: state.cart,
          nextCartItem: action.payload,
        }),
      };
    case "APP/REMOVE_CART_ITEM":
      return {
        ...state,
        cart: handleRemoveCartItem({
          prevCartItems: state.cart,
          cartItemToRemove: action.payload,
        }),
      };
    case "APP/REDUCE_CART_ITEM":
      return {
        ...state,
        cart: handleReduceCartItem({
          prevCartItems: state.cart,
          cartItemToReduce: action.payload,
        }),
      };
    case "APP/GET_TOTAL":
      return {
        ...state,
        totalPrice: getTotalprice({
          state: action.payload,
        }),
        totalQuantity: getTotalQuantity({
          state: action.payload,
        }),
      };
    default:
      return state;
  }
};
