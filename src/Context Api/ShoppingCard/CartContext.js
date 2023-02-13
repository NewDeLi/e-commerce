import React, { createContext, useReducer, useContext } from "react";
import { AppReducer } from "./reducer";
import { AppActions } from "./actions";

const initalState = {
  cart: [],
  total: 0,
  totalQuantity: 0,
};

const CartContext = createContext({
  state: initalState,
});

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);
  const actions = AppActions(dispatch);

  return (
    <CartContext.Provider
      value={{
        state,
        actions,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartStore = () => {
  const { state, actions } = useContext(CartContext);
  return {
    state,
    actions,
  };
};
