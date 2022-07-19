import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const existingCartObject = (nextCartObject) => {
    return cart.find((cartObject) => cartObject.id === nextCartObject.id);
  };

  const handleAddToCart = (nextCartObject) => {
    const quantityIncrement = 1;
    const cartItemExists = existingCartObject(nextCartObject);

    if (cartItemExists) {
      setCart(
        cart.map((cartObject) =>
          cartObject.id === nextCartObject.id
            ? {
                ...cartObject,
                quantity: cartObject.quantity + quantityIncrement,
              }
            : cartObject
        )
      );
    }
    setCart([
      ...cart,
      {
        ...nextCartObject,
        quantity: quantityIncrement,
      },
    ]);
  };
  return (
    <CartContext.Provider value={{ cart, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};
