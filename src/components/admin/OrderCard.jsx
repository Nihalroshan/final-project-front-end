import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function OrderCard({ order }) {
  return (
    <Card sx={{ maxWidth: 350, margin: "10px" }}>
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div">
          Order id: {order._id}
        </Typography>
        {order.products.map((product) => {
          return (
            <ul>
              <li>
                {product.name} - {product.price}
              </li>
            </ul>
          );
        })}
        <Typography gutterBottom variant="subtitle1" component="div">
          Total: {order.totalPrice}
        </Typography>
      </CardContent>
    </Card>
  );
}
