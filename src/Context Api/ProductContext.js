import React, { createContext, useEffect, useState } from "react";
import {
  handleFetchProduct,
  handleAddProduct,
  handleDeleteProduct,
} from "../firebase/products";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState();

  useEffect(() => {
    const productListener = async () => {
      setLoading(true);
      try {
        await handleFetchProduct(setProducts);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    return () => productListener();
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

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
