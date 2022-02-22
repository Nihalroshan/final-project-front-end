import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const AdminProductCard = (props) => {
  const { product, onClick } = props;

  return (
    <Card onClick={onClick(true)} sx={{ width: 200, margin: "10px" }}>
      <CardActionArea>
        <CardMedia component="img" height="100" image={product.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            PRICE : {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default AdminProductCard;
