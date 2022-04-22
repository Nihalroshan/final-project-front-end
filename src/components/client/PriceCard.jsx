import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import orderService from "../../services/orderService";

export default function PriceCard({ totalPrice, cart }) {

  const handleBuy = async () => {
    const userId = localStorage.getItem("clientId");
    const orderDetails = {
      products: cart,
      userId,
      totalPrice,
    };
    try {
      const response = await orderService.createOrder(orderDetails);
      console.log(response);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <Card
      sx={{
        position: "fixed",
        bottom: 50,
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        marginTop: "10px",
        borderTopRightRadius: "20px",
        borderTopLeftRadius: "20px",
        backgroundColor: "#39393b",
        borderTop: "1px  black ",
        height: "150px",
        justifyContent: "space-around",
      }}
    >
      <Box>
        <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
          <Typography component="div" color="#fff" variant="h6">
            Total:
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontSize: 20, color: "#ff5d0d" }}
          >
            {totalPrice}
          </Typography>
        </CardContent>
      </Box>
      <div style={{ display: "grid", placeItems: "center  " }}>
        <Button
          onClick={handleBuy}
          sx={{ width: "90%", marginBottom: "30px", height: "40px" }}
          variant="contained"
        >
          Buy Now
        </Button>
      </div>
    </Card>
  );
}
