import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Container } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ product, link }) => {
  return (
    <Link
      to={link ? `/products/${product._id}` : ""}
      style={{ textDecoration: "none" }}
    >
      <Container>
        <Card
          sx={{
            maxWidth: 100,
            height: "150px",
            padding: 3,
            borderRadius: 5,
            backgroundColor: "#f5f5f5",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              image={product.image}
              sx={{ objectFit: "cover", borderRadius: "50%" }}
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                gutterBottom
                variant="h5"
                // component="div"
                sx={{ fontSize: 13, fontWeight: 500 }}
              >
                {product.name}
              </Typography>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontSize: 20, color: "red" }}
              >
                {product.price && product.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Container>
    </Link>
  );
};

export default ProductCard;
