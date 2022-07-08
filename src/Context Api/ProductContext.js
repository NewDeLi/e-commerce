import React, { createContext, useEffect, useState } from "react";
import {
  handleFetchProduct,
  handleAddProduct,
  handleDeleteProduct,
} from "../firebase/products";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  return (
    <ProductContext.Provider
      value={{
        products,
        handleAddProduct,
        handleDeleteProduct,
        handleFetchProduct,
        setProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
