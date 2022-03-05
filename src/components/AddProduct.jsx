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
import { useState } from "react";

const AddProduct = ({ toggleDrawer }) => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();

  const handleSubmit = () => {
    const productDetails = {
      name,
      description,
      category,
      price,
    };
    console.log(productDetails);
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
            onChange={(e) => setName(e.target.value)}
          ></TextField>
          <TextField
            sx={{ margin: "10px" }}
            variant="outlined"
            label="Description"
            multiline
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
              <MenuItem value="Food">Food</MenuItem>
              <MenuItem value="Beverage">Beverage</MenuItem>
              <MenuItem value="Continental">Continental</MenuItem>
            </Select>
          </FormControl>
          <TextField
            sx={{ margin: "10px" }}
            variant="outlined"
            label="Price"
            onChange={(e) => setPrice(e.target.value)}
          ></TextField>
          <Button
            onClick={handleSubmit}
            sx={{ margin: "10px" }}
            color="success"
            variant="contained"
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
        </Stack>
      </Box>
    </Container>
  );
};

export default AddProduct;
