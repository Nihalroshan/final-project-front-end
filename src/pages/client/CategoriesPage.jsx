import { Autocomplete, Container, Grid, Stack, TextField } from "@mui/material";

import ProductCard from "../../components/client/ProductCard";

const categories = [
  {
    name: "Breakfast",
    image:
      "https://c.ndtvimg.com/2021-02/e2uarbeo_juice-_625x300_25_February_21.jpg",
  },
  {
    name: "Dinner",
    image:
      "https://c.ndtvimg.com/2021-02/e2uarbeo_juice-_625x300_25_February_21.jpg",
  },
  {
    name: "Lunch",
    image:
      "https://c.ndtvimg.com/2021-02/e2uarbeo_juice-_625x300_25_February_21.jpg",
  },
  {
    name: "Beverages",
    image:
      "https://c.ndtvimg.com/2021-02/e2uarbeo_juice-_625x300_25_February_21.jpg",
  },
  {
    name: "Arabian",
    image:
      "https://c.ndtvimg.com/2021-02/e2uarbeo_juice-_625x300_25_February_21.jpg",
  },
  {
    name: "Continental",
    image:
      "https://c.ndtvimg.com/2021-02/e2uarbeo_juice-_625x300_25_February_21.jpg",
  },
  {
    name: "Mexican",
    image:
      "https://c.ndtvimg.com/2021-02/e2uarbeo_juice-_625x300_25_February_21.jpg",
  },
];

const CategoriesPage = () => {
  return (
    <div>
      <Container>
        {/* <Stack spacing={2} sx={{ width: "100hw", margin: "10px" }}>
          <Autocomplete
            style={{ backgroundColor: "#f5f5f5" }}
            id="free-solo-demo"
            freeSolo
            options={products.map((product) => product.name)}
            renderInput={(params) => (
              <TextField {...params} label="Search food items" />
            )}
          />
        </Stack> */}

        {/* card */}
        <Grid container spacing={2}>
          {categories.map((category) => (
            <Grid item xs={6} md={2}>
              <ProductCard product={category} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default CategoriesPage;
