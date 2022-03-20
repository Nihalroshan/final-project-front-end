import { Autocomplete, Container, Grid, Stack, TextField } from "@mui/material";

import ProductCard from "../../components/client/ProductCard";

const products = [
  {
    name: "Shawarma",
    image:
      "https://media.istockphoto.com/photos/fried-pork-and-vegetables-on-white-background-picture-id1190330112?k=20&m=1190330112&s=612x612&w=0&h=_TrmthJupdqYmMU-NC-es85TEvaBJsynDS383hqiAvM=",
    price: "$12",
  },
  {
    name: "Shawarma",
    image:
      "https://media.istockphoto.com/photos/fried-pork-and-vegetables-on-white-background-picture-id1190330112?k=20&m=1190330112&s=612x612&w=0&h=_TrmthJupdqYmMU-NC-es85TEvaBJsynDS383hqiAvM=",
    price: "$12",
  },
  {
    name: "Shawarma",
    image:
      "https://media.istockphoto.com/photos/fried-pork-and-vegetables-on-white-background-picture-id1190330112?k=20&m=1190330112&s=612x612&w=0&h=_TrmthJupdqYmMU-NC-es85TEvaBJsynDS383hqiAvM=",
    price: "$12",
  },
  {
    name: "Shawarma",
    image:
      "https://media.istockphoto.com/photos/fried-pork-and-vegetables-on-white-background-picture-id1190330112?k=20&m=1190330112&s=612x612&w=0&h=_TrmthJupdqYmMU-NC-es85TEvaBJsynDS383hqiAvM=",
    price: "$12",
  },
  {
    name: "Shawarma",
    image:
      "https://media.istockphoto.com/photos/fried-pork-and-vegetables-on-white-background-picture-id1190330112?k=20&m=1190330112&s=612x612&w=0&h=_TrmthJupdqYmMU-NC-es85TEvaBJsynDS383hqiAvM=",
    price: "$12",
  },
  {
    name: "Shawarma",
    image:
      "https://media.istockphoto.com/photos/fried-pork-and-vegetables-on-white-background-picture-id1190330112?k=20&m=1190330112&s=612x612&w=0&h=_TrmthJupdqYmMU-NC-es85TEvaBJsynDS383hqiAvM=",
    price: "$12",
  },
  {
    name: "Shawarma",
    image:
      "https://media.istockphoto.com/photos/fried-pork-and-vegetables-on-white-background-picture-id1190330112?k=20&m=1190330112&s=612x612&w=0&h=_TrmthJupdqYmMU-NC-es85TEvaBJsynDS383hqiAvM=",
    price: "$12",
  },
  {
    name: "Shawarma",
    image:
      "https://media.istockphoto.com/photos/fried-pork-and-vegetables-on-white-background-picture-id1190330112?k=20&m=1190330112&s=612x612&w=0&h=_TrmthJupdqYmMU-NC-es85TEvaBJsynDS383hqiAvM=",
    price: "$12",
  },
];

const ProductsPage = () => {
  return (
    <div>
      <Container>
        <Stack spacing={2} sx={{ width: "100hw", margin: "10px" }}>
          <Autocomplete
            style={{ backgroundColor: "#f5f5f5" }}
            id="free-solo-demo"
            freeSolo
            options={products.map((product) => product.name)}
            renderInput={(params) => (
              <TextField {...params} label="Search food items" />
            )}
          />
        </Stack>

        {/* card */}
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={6} md={2}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProductsPage;
