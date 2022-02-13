import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import React from "react";

const ProductPage = () => {
  return (
    <>
      <Typography margin={"10px"} variant="h6">
        Products
      </Typography>
      <Container sx={{display:"flex"}}>
        <Card sx={{ maxWidth: 200,margin:"10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jr2l2nwwodytmkecuiut"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Chicken Burger
              </Typography>
              <Typography variant="body2" color="text.secondary">
               PRICE : 20$
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 200 ,margin:"10px"}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              image="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jr2l2nwwodytmkecuiut"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Chicken Burger
              </Typography>
              <Typography variant="body2" color="text.secondary">
               PRICE : 20$
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </>
  );
};

export default ProductPage;
