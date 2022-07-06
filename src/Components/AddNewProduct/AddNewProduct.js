import React, { useContext, useState } from "react";
import FormInput from "../forms/FormInput/FormInput";
import FormButton from "../forms/FormButton/FormButton";
import FormSelect from "../forms/FormSelect/FormSelect";
import { Grid } from "@mui/material";
import { ProductContext } from "../../Context Api/ProductContext";
import "./AddNewProduct.scss";

export default function AddNewProduct() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);

  const { handleAddProduct } = useContext(ProductContext);

  const resetForm = () => {
    setCategory("");
    setName("");
    setImage("");
    setPrice(0);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await handleAddProduct(category, name, image, price);
    } catch (error) {
      // console.log(error)
    } finally {
      resetForm();
    }
  };

  return (
    <div className="addNewProduct">
      <form onSubmit={handleFormSubmit}>
        <h2>Add new product</h2>
        <Grid
          container
          alignItems="center"
          justify="center"
          direction="column"
          spacing={1}
        >
          <Grid item>
            <FormSelect
              label="Category"
              value={category}
              options={[
                {
                  value: "mens",
                  name: "Mens",
                },
                {
                  value: "womens",
                  name: "Womens",
                },
              ]}
              onChange={(event) => {
                event.preventDefault();
                setCategory(event.target.value);
              }}
            />
          </Grid>
          <Grid item>
            <FormInput
              label="Name"
              type="text"
              value={name}
              onChange={(event) => {
                event.preventDefault();
                setName(event.target.value);
              }}
            />
          </Grid>
          <Grid item>
            <FormInput
              label="Main image URL"
              type="url"
              value={image}
              onChange={(event) => {
                event.preventDefault();
                setImage(event.target.value);
              }}
            />
          </Grid>
          <Grid item>
            <FormInput
              label="Price"
              type="number"
              value={price}
              min="0.00"
              max="10000.00"
              step="0.01"
              onChange={(event) => {
                event.preventDefault();
                setPrice(event.target.value);
              }}
            />
          </Grid>
          <Grid item>
            <FormButton type="submit">Add product</FormButton>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
