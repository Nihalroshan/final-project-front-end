import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ItemCounter from "./ItemCounter";

export default function CartCard({ item }) {
  return (
    <Card
      sx={{
        display: "flex",
        marginTop: "10px",
        borderRadius: "20px",
        backgroundColor: "#6642b4",
        justifyContent: "space-around",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography color="#fff" component="div" variant="h6">
            {item.name}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontSize: 20, color: "#ff5d0d" }}
          >
            {item.price}
          </Typography>
        </CardContent>
        {/* <ItemCounter /> */}
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 130, borderRadius: "100%", margin: "10px" }}
        image={item.imageUrl}
        alt=""
      />
    </Card>
  );
}
