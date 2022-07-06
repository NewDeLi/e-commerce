import React, { useContext } from "react";
import { ProductContext } from "../../Context Api/ProductContext/ProductContext";
import FormButton from "../forms/FormButton/FormButton";
import { Grid } from "@mui/material";
import "./ManageProducts.scss";

export default function ManageProducts() {
  const { products, handleDeleteProduct } = useContext(ProductContext);

  return (
    <div className="manageProducts">
      <h2>Manage Products</h2>
      <Grid container>
        {Array.isArray(products) &&
          products.length > 0 &&
          products.map((product, index) => {
            const { name, image, price, id } = product;

            return (
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                direction="row"
                item
                key={index}
                className="productCards"
              >
                <Grid item>
                  <img src={image} alt="product thumbnail" />
                </Grid>
                <Grid item>
                  <p>Product: {name}</p>
                  <p>Price: {price}€</p>
                </Grid>
                <Grid item>
                  <FormButton
                    type="button"
                    onClick={() => handleDeleteProduct(id)}
                  >
                    Delete
                  </FormButton>
                </Grid>
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
}
