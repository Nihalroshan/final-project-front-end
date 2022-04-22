import { Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NutritionValue from "../../components/client/NutritionValue";
import clientService from "../../services/clientService";
import productService from "../../services/productService";

const SingleItemPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await productService.getProduct(productId);
        console.log(response);
        setProduct(response);
      } catch (err) {
        console.log(err.response.data);
      }
    };
    getProduct();
  }, []);

  const clientId = localStorage.getItem("clientId");

  const handleAddToCart = async () => {
    const cartDetails = {
      id: product._id,
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price,
    };
    try {
      const response = await clientService.addToCart(cartDetails, clientId);
      console.log(response);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  console.log(productId);
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "#6642b4",
      }}
    >
      <div style={{ height: "40%", display: "grid", placeItems: "center" }}>
        <img
          style={{ borderRadius: "20%", height: "200px", width: "200px" }}
          src={product.imageUrl}
          alt="food"
        />
      </div>
      <div
        style={{
          height: "60%",
          backgroundColor: "white",
          borderRadius: " 40px 40px 0px 0px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingTop: "20px",
          }}
        >
          <Typography variant="h4">{product.name}</Typography>
          <Typography color="error" variant="h4">
            {product.price}
          </Typography>
        </div>
        <div style={{ margin: "50px 20px 10px ", minHeight: "40%" }}>
          <Typography variant="h6">About</Typography>
          <Typography variant="body1">{product.description}</Typography>
        </div>
        {/* <NutritionValue /> */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "20px",
          }}
        >
          <Button
            onClick={handleAddToCart}
            size="large"
            fullWidth
            color="primary"
            variant="contained"
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleItemPage;
