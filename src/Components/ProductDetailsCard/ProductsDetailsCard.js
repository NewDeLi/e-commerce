import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../Context Api/ProductContext";
import FormButton from "../forms/FormButton/FormButton";
import "./ProductsDetailsCard.scss";

export default function ProductsDetailsCard() {
  const { products, setProducts, fetchProductByID } =
    useContext(ProductContext);
  const { productID } = useParams();

  useEffect(() => {
    fetchProductByID(productID);
    return () => setProducts([]);
  }, []);

  return (
    <div className="productDetailsCard">
      <div className="headerImage">
        <img src={products.image} alt="product thumbnail" />
      </div>
      <div className="productDetails">
        <ul>
          <li>
            <h1>{products.name}</h1>
            <h3> {products.category}</h3>
          </li>
          <li>
            <span>{products.price}€</span>
          </li>
          <li>
            <FormButton>Add to Cart</FormButton>
          </li>
        </ul>
      </div>
    </div>
  );
}
