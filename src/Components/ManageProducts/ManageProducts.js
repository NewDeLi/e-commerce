import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../Context Api/ProductContext";
import FormButton from "../forms/FormButton/FormButton";
import { Grid } from "@mui/material";
import "./ManageProducts.scss";
import LoadeMore from "../LoadMore/LoadeMore";

export default function ManageProducts() {
  const { products, handleDeleteProduct, handleFetchProducts, setProducts } =
    useContext(ProductContext);

  const [currenLimit, setCurrentLimit] = useState(3);
  const filterType = undefined;

  useEffect(() => {
    handleFetchProducts(setProducts, filterType, currenLimit);
  }, [currenLimit]);

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
                justifyContent="space-around"
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
      <div className="loadMore">
        <LoadeMore
          filterType={filterType}
          setCurrentLimit={setCurrentLimit}
          currenLimit={currenLimit}
        />
      </div>
    </div>
  );
}
