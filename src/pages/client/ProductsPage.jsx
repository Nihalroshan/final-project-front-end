import { Container, Grid, Stack, TextField } from "@mui/material";
import { useState, useEffect } from "react";

import ProductCard from "../../components/client/ProductCard";
import productService from "../../services/productService";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await productService.getProducts();
        setProducts(response);
      } catch (err) {}
    };
    getProducts();
  }, []);

  const searchFiltered = products.filter((product) => {
    return product.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <div>
      <Container>
        <Stack spacing={2} sx={{ width: "100hw", margin: "10px" }}>
          <TextField
            label="Search"
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </Stack>

        {/* card */}
        <Grid container spacing={2}>
          {searchFiltered &&
            searchFiltered.map((product) => (
              <Grid item xs={6} md={2}>
                <ProductCard link product={product} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProductsPage;
