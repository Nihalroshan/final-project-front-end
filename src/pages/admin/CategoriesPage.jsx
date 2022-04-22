import { Button, Container, Drawer, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import AdminProductCard from "../../components/admin/AdminProductCard";
import AddIcon from "@mui/icons-material/Add";
import AddCategory from "../../components/admin/AddCategory";
import categoryService from "../../services/categoryService";

const CategoriesPage = () => {
  const [drawerState, setDrawerState] = useState(false);
  const [categories, setCategories] = useState([]);
  // const [categoryLoader, setCategoryLoader] = useState(false);
  const getCategories = async () => {
    try {
      const response = await categoryService.getCategories();
      setCategories(response);
      console.log(response);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await categoryService.deleteCategory(id);
      if (response.status === 200) getCategories();
      console.log(response);
    } catch (err) {
      console.log(err.response.data);
    }
  };

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
          <AddCategory
            // categoryLoader={categoryLoader}
            // setCategoryLoader={setCategoryLoader}
            getCategories={getCategories}
            toggleDrawer={toggleDrawer}
          />
        </Drawer>
      </Container>
      <Container sx={{ display: "flex", flexWrap: "wrap" }}>
        {categories &&
          categories.map((category, i) => {
            return (
              <AdminProductCard
                key={i}
                product={category}
                handleDelete={handleDelete}
              />
            );
          })}
      </Container>
    </>
  );
};

export default CategoriesPage;
