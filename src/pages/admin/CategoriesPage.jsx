import { Button, Container, Drawer, Typography } from "@mui/material";
import { useState } from "react";
import AdminProductCard from "../../components/admin/AdminProductCard";
import AddIcon from "@mui/icons-material/Add";
import AddCategory from "../../components/admin/AddCategory";

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
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState(open);
  };

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <Typography variant="h6">Categories</Typography>
        <Button
          onClick={toggleDrawer(true)}
          startIcon={<AddIcon />}
          variant="contained"
        >
          Add Category
        </Button>
        <Drawer anchor="right" open={drawerState} onClose={toggleDrawer(false)}>
          <AddCategory toggleDrawer={toggleDrawer} />
        </Drawer>
      </Container>
      <Container sx={{ display: "flex", flexWrap: "wrap" }}>
        {categories.map((category, i) => {
          return <AdminProductCard key={i} product={category} />;
        })}
      </Container>
    </>
  );
};

export default CategoriesPage;
