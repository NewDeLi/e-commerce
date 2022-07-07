import React, { useContext } from "react";
import { ProductContext } from "../../Context Api/ProductContext";
import FormButton from "../forms/FormButton/FormButton";
import { Grid } from "@mui/material";
import "./SearchResult.scss";

export default function SearchResults() {
  const { products } = useContext(ProductContext);

  return (
    <div className="searchResults">
      <Grid container direction="row" justifyContent="space-around">
        {Array.isArray(products) &&
          products.length > 0 &&
          products.map((product, index) => {
            const { name, image, price, category, id } = product;
            if (!name || !image || !category || typeof price === "undefined") {
              return <></>;
            }
            return (
              <Grid item key={index}>
                <ul>
                  <li>
                    <img src={image} alt="product thumbnail" />
                  </li>
                  <li>
                    <h3>{name}</h3>
                    <h4> {category}</h4>
                    <h5>{price}€</h5>
                  </li>
                  <li>
                    <FormButton>Add to Cart</FormButton>
                  </li>
                </ul>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}
