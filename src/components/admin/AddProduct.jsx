import {
  Box,
  Button,
  Container,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import categoryService from "../../services/categoryService";
import productService from "../../services/productService";

const AddProduct = ({ toggleDrawer, getProducts }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState([]);

  const clearInput = () => {
    setName("");
    setDescription("");
    setCategory("");
    setPrice("");
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await categoryService.getCategories();
        console.log(response);
        setCategories(response);
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, []);

  const handleSubmit = async () => {
    const productDetails = {
      name,
      description,
      category,
      price,
    };
    try {
      const response = await productService.createProduct(productDetails);
      if (response.status === 200) {
        clearInput();
        // setProductLoader(!productLoader);
        getProducts();
      }
      console.log(response);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <Container>
      <Box sx={{ width: 600 }} role="presentation">
        <Typography variant="h5">Add Product</Typography>
        <Stack sx={{ margin: "10px", padding: "10px" }}>
          <label htmlFor="contained-button-file">
            <Input
              sx={{ display: "none" }}
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
            <Button
              sx={{ margin: "10px" }}
              variant="contained"
              component="span"
            >
              Upload Image
            </Button>
          </label>
          <TextField
            sx={{ margin: "10px" }}
            variant="outlined"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></TextField>
          <TextField
            sx={{ margin: "10px" }}
            variant="outlined"
            label="Description"
            multiline
            value={description}
            minRows={3}
            onChange={(e) => setDescription(e.target.value)}
          ></TextField>
          <FormControl sx={{ margin: "10px" }}>
            <InputLabel id="category-select-dropdown">Category</InputLabel>
            <Select
              labelId="category-select-dropdown"
              onChange={(e) => setCategory(e.target.value)}
              label="Category"
            >
              {categories &&
                categories.map((category) => {
                  return (
                    <MenuItem value={category.name}>{category.name}</MenuItem>
                  );
                })}
            </Select>
          </FormControl>
          <TextField
            sx={{ margin: "10px" }}
            variant="outlined"
            label="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          ></TextField>
          <Button
            onClick={handleSubmit}
            sx={{ margin: "10px" }}
            color="success"
            variant="contained"
            disabled={
              name && description && category && price ? "" : "disabled"
            }
          >
            Add
          </Button>
          <Button
            onClick={toggleDrawer(false)}
            sx={{ margin: "10px" }}
            color="error"
            variant="contained"
          >
            Cancel
          </Button>
          {/* {addSuccess && (
            <Alert variant="outlined" severity="success">Product Added Successfully</Alert>
          )} */}
        </Stack>
      </Box>
    </Container>
  );
};

export default AddProduct;
