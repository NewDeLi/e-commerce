const existingCartItem = ({ prevCartItems, nextCartItem }) => {
  return prevCartItems.find((cartItem) => cartItem.id === nextCartItem.id);
};

export const handleAddToCart = ({ prevCartItems, nextCartItem }) => {
  const quantityIncrement = 1;
  const cartItemExists = existingCartItem({ prevCartItems, nextCartItem });

  if (cartItemExists) {
    return prevCartItems.map((cartItem) =>
      cartItem.id === nextCartItem.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + quantityIncrement,
          }
        : cartItem
    );
  }

  return [
    ...prevCartItems,
    {
      ...nextCartItem,
      quantity: quantityIncrement,
    },
  ];
};

export const handleRemoveCartItem = ({ prevCartItems, cartItemToRemove }) => {
  return prevCartItems.filter((item) => item.id !== cartItemToRemove);
};

export const handleReduceCartItem = ({ prevCartItems, cartItemToReduce }) => {
  const existingCartItem = prevCartItems.find(
    (cartItem) => cartItem.id === cartItemToReduce.id
  );

  if (existingCartItem.quantity === 1) {
    return prevCartItems.filter(
      (cartItem) => cartItem.id !== existingCartItem.id
    );
  }

  return prevCartItems.map((cartItem) =>
    cartItem.id === existingCartItem.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};

export const getTotalprice = ({ state }) => {
  if (state.length !== 0) {
    const total = state.map((item) => {
      const number = parseInt(item.price);
      return number * item.quantity;
    });
    const reducer = (accumulator, curr) => accumulator + curr;
    return total.reduce(reducer);
  }
  return 0;
};

export const getTotalQuantity = ({ state }) => {
  if (state.length !== 0) {
    const total = state.map((item) => {
      return item.quantity;
    });
    const reducer = (accumulator, curr) => accumulator + curr;
    return total.reduce(reducer);
  }
  return 0;
};
