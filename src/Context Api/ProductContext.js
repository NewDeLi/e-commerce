import React, { createContext, useState } from "react";
import {
  handleFetchProducts,
  handleAddProduct,
  handleDeleteProduct,
  handleFetchProduct
} from "../firebase/products";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProductByID = async (productID) => {
    try {
      const product = await handleFetchProduct(productID);
      setProducts(product);
    } catch (error) {}
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        handleAddProduct,
        handleDeleteProduct,
        handleFetchProducts,
        setProducts,
        fetchProductByID
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
