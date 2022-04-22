import { Card, Container, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AdminProductCard from "../../components/admin/AdminProductCard";
import OrderCard from "../../components/admin/OrderCard";
import ProductCard from "../../components/client/ProductCard";
import orderService from "../../services/orderService";

const OrderPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const response = await orderService.getOrders();
        console.log(response);
        setOrders(response)
      } catch (err) {
        console.log(err.response.data);
      }
    };
    getOrders();
  }, []);

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <Typography variant="h6">Orders</Typography>
      </Container>
      {/* <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={2}>
            {[0, 1, 2, 3].map((value) => (
              <Grid key={value} item>
                <Paper
                  elevation={5}
                  sx={{
                    minHeight: "80vh",
                    width: "300px",
                    backgroundColor: "white",
                  }}
                >
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid> */}
      <Container sx={{ display: "flex", flexWrap: "wrap" }}>
        {orders &&
          orders.map((order) => {
            return <OrderCard order={order} />;
          })}
      </Container>
    </>
  );
};

export default OrderPage;
