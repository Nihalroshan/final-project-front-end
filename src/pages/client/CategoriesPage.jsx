import { Container, Grid } from "@mui/material";
import { useState, useEffect } from "react";

import ProductCard from "../../components/client/ProductCard";
import categoryService from "../../services/categoryService";

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await categoryService.getCategories();
        setCategories(response);
      } catch (err) {}
    };
    getCategories();
  }, []);

  return (
    <div>
      <Container>
        {/* <Stack spacing={2} sx={{ width: "100hw", margin: "10px" }}>
          <Autocomplete
            style={{ backgroundColor: "#f5f5f5" }}
            id="free-solo-demo"
            freeSolo
            options={products.map((product) => product.name)}
            renderInput={(params) => (
              <TextField {...params} label="Search food items" />
            )}
          />
        </Stack> */}

        {/* card */}
        <Grid container spacing={2}>
          {categories &&
            categories.map((category) => (
              <Grid item xs={6} md={2}>
                <ProductCard product={category} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default CategoriesPage;
