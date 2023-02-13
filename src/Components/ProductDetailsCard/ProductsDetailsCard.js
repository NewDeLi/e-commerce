import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProductContext } from "../../Context Api/ProductContext";
import { useCartStore } from "../../Context Api/ShoppingCard/CartContext";
import FormButton from "../forms/FormButton/FormButton";
import "./ProductsDetailsCard.scss";

export default function ProductsDetailsCard() {
  const { products, setProducts, fetchProductByID } =
    useContext(ProductContext);
  const { productID } = useParams();
  const { actions } = useCartStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProductByID(productID);
    return () => setProducts([]);
  }, []);

  const handleAddToCart = (product) => {
    if (!product) return;
    actions.addToCart(product);
    navigate("/cart");
  };

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
            <FormButton onClick={() => handleAddToCart(products)}>
              {/*check this with product*/}
              Add to Cart
            </FormButton>
          </li>
          <li>
            <div
              className="productInfo"
              dangerouslySetInnerHTML={{ __html: products.info }}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
