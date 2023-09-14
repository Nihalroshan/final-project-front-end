import {
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productService from "../../services/productService";

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const getProduct = async () => {
    try {
      const product = await productService.getProduct(id);
      setProduct(product);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    // const getProducts = async () => {
    //   try {
    //     const products = await productService.getProducts();
    //     setProducts(products);
    //   } catch (err) {
    //     console.log(err.message);
    //   }
    // };
    getProduct();
  }, []);

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "40px",
          height: "70vh",
        }}
      >
        <Paper elevation={3} sx={{ padding: "30px" }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                sx={{
                  marginTop: "10px",
                  height: "90vh",
                }}
              >
                <Grid item>
                  <img
                    style={{
                      marginTop: "35px",
                      height: "300px",
                      width: "100%",
                      borderRadius: "10px",
                    }}
                    alt="food"
                    src={product?.imageUrl}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={8}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                sx={{
                  margin: "50px",
                  height: "90vh",
                }}
              >
                <Grid item style={{ padding: "0 30px" }}>
                  <Typography variant="h4">{product?.name}</Typography>
                  <Typography variant="subtitle1">
                    {product?.category}
                  </Typography>

                  <Stack direction="row" spacing={2}>
                    <Chip
                      style={{ marginTop: "20px" }}
                      color="primary"
                      label={`PRICE:${product?.price}`}
                    />
                    {/* <Chip
                      style={{ marginTop: "20px" }}
                      color="success"
                      label="IN STOCK"
                    /> */}
                  </Stack>

                  <Typography style={{ marginTop: "20px" }} variant="body2">
                    {product?.description}
                  </Typography>

                  <Stack
                    style={{
                      marginTop: "30px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    direction="row"
                    spacing={2}
                  >
                    <Button color="warning" variant="contained">
                      Edit
                    </Button>
                    <Button color="error" variant="contained">
                      Delete
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default ProductPage;
