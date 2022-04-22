import { Button, Container, Drawer, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import AdminProductCard from "../../components/admin/AdminProductCard";
import AddIcon from "@mui/icons-material/Add";
import AddProduct from "../../components/admin/AddProduct";
import productService from "../../services/productService";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  // const [productLoader, setProductLoader] = useState(false);
  const [drawerState, setDrawerState] = useState(false);

  const getProducts = async () => {
    try {
      const products = await productService.getProducts();
      setProducts(products);
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
    getProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await productService.deleteProduct(id);
      if (response.status === 200) getProducts();
      console.log(response);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState(open);
  };

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <Typography variant="h6">Products</Typography>
        <Button
          onClick={toggleDrawer(true)}
          startIcon={<AddIcon />}
          variant="contained"
        >
          Add Product
        </Button>
        <Drawer anchor="right" open={drawerState} onClose={toggleDrawer(false)}>
          <AddProduct
            // productLoader={productLoader}
            // setProductLoader={setProductLoader}
            getProducts={getProducts}
            toggleDrawer={toggleDrawer}
          />
        </Drawer>
      </Container>
      <Container sx={{ display: "flex", flexWrap: "wrap" }}>
        {products &&
          products.map((product, i) => {
            return (
              <AdminProductCard
                handleDelete={handleDelete}
                key={i}
                product={product}
                price
              />
            );
          })}
      </Container>
    </>
  );
};

export default ProductsPage;
