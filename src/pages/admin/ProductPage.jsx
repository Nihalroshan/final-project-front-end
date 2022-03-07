import { Button, Container, Drawer, Typography } from "@mui/material";
import { useState } from "react";
import AdminProductCard from "../../components/admin/AdminProductCard";
import AddIcon from "@mui/icons-material/Add";
import AddProduct from "../../components/admin/AddProduct";

const products = [
  {
    name: "Chicken Burger",
    price: "20$",
    image:
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jr2l2nwwodytmkecuiut",
  },
  {
    name: "Chicken Shawarma",
    price: "40$",
    image:
      "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Shawarma.jpg",
  },
  {
    name: "Chicken Biriyani",
    price: "20$",
    image:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe-500x500.jpg",
  },
  {
    name: "Pizza",
    price: "20$",
    image:
      "https://www.tasteofhome.com/wp-content/uploads/2018/01/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home-7.jpg",
  },
  {
    name: "Pizza",
    price: "20$",
    image:
      "https://www.tasteofhome.com/wp-content/uploads/2018/01/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home-7.jpg",
  },
  {
    name: "Pizza",
    price: "20$",
    image:
      "https://www.tasteofhome.com/wp-content/uploads/2018/01/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home-7.jpg",
  },
  {
    name: "Pizza",
    price: "20$",
    image:
      "https://www.tasteofhome.com/wp-content/uploads/2018/01/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home-7.jpg",
  },
  {
    name: "Pizza ",
    price: "20$",
    image:
      "https://www.tasteofhome.com/wp-content/uploads/2018/01/Pizza-from-Scratch_EXPS_FT20_8621_F_0505_1_home-7.jpg",
  },
];

const ProductPage = () => {
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
        <Typography variant="h6">Products</Typography>
        <Button
          onClick={toggleDrawer(true)}
          startIcon={<AddIcon />}
          variant="contained"
        >
          Add Product
        </Button>
        <Drawer anchor="right" open={drawerState} onClose={toggleDrawer(false)}>
          <AddProduct toggleDrawer={toggleDrawer} />
        </Drawer>
      </Container>
      <Container sx={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product, i) => {
          return <AdminProductCard key={i} product={product} />;
        })}
      </Container>
    </>
  );
};

export default ProductPage;
