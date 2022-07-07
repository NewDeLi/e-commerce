import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../Context Api/ProductContext";
import FormButton from "../forms/FormButton/FormButton";
import FormSelect from "../forms/FormSelect/FormSelect";
import { Grid } from "@mui/material";
import "./SearchResult.scss";

export default function SearchResults() {
  const { products, setProducts, handleFetchProduct } =
    useContext(ProductContext);
  const navigate = useNavigate();
  const { filterType } = useParams();

  useEffect(() => {
    handleFetchProduct(setProducts, filterType);
  }, [filterType]);

  const handleFilter = (event) => {
    const currentFilter = event.target.value;
    navigate(`/search/${currentFilter}`);
  };

  return (
    <div className="searchResults">
      <FormSelect
        defaultValue={filterType ? filterType : ""} //fix mui warning: filtertype is undefined when component mounts
        label="Search"
        options={[
          {
            value: "showAll",
            name: "Show all",
          },
          {
            value: "mens",
            name: "Mens",
          },
          {
            value: "womens",
            name: "Womens",
          },
        ]}
        onChange={handleFilter}
      />
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
