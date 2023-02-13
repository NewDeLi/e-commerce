import React from "react";

export const AppActions = (dispatch) => ({
  addToCart: (payload) => {
    dispatch({
      type: "APP/ADD_TO_CART",
      payload,
    });
  },
  removeCartItem: (payload) => {
    dispatch({
      type: "APP/REMOVE_CART_ITEM",
      payload,
    });
  },
  reduceCartItem: (payload) => {
    dispatch({
      type: "APP/REDUCE_CART_ITEM",
      payload,
    });
  },
  getTotal: (payload) => {
    dispatch({
      type: "APP/GET_TOTAL",
      payload,
    });
  },
});
