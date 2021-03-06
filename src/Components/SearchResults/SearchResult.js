import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../../Context Api/ProductContext";
import FormButton from "../forms/FormButton/FormButton";
import FormSelect from "../forms/FormSelect/FormSelect";
import { Grid } from "@mui/material";
import "./SearchResult.scss";
import LoadeMore from "../LoadMore/LoadeMore";

export default function SearchResults() {
  const { products, setProducts, handleFetchProducts } =
    useContext(ProductContext);

  const [currenLimit, setCurrentLimit] = useState(3);
  const { filterType } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    handleFetchProducts(setProducts, filterType, currenLimit);
  }, [filterType, currenLimit]);

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
            if (
              !name ||
              !image ||
              !category ||
              typeof price === "undefined" ||
              !id
            ) {
              return <></>;
            }
            return (
              <Grid item key={index}>
                <ul>
                  <li>
                    <Link to={`/product/${id}`}>
                      <img src={image} alt="product thumbnail" />
                    </Link>
                  </li>
                  <li>
                    <Link to={`/product/${id}`}>
                      <h3>{name}</h3>
                      <h4> {category}</h4>
                      <h5>{price}???</h5>
                    </Link>
                  </li>
                  <li>
                    <FormButton>Add to Cart</FormButton>
                  </li>
                </ul>
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
