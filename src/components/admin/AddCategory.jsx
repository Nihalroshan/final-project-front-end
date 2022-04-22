import {
  Box,
  Button,
  Container,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import categoryService from "../../services/categoryService";

const AddCategory = ({ toggleDrawer, getCategories }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const clearInput = () => {
    setName("");
    setDescription("");
  };

  const handleSubmit = async () => {
    const categoryDetails = {
      name,
      description,
    };
    try {
      const response = await categoryService.createCategory(categoryDetails);
      if (response.status === 200) {
        clearInput();
        getCategories();
        // setCategoryLoader(!categoryLoader);
      }
      console.log(response);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <Container>
      <Box sx={{ width: 600 }} role="presentation">
        <Typography variant="h5">Add Category</Typography>
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
            value={name}
            label="Name"
            onChange={(e) => setName(e.target.value)}
          ></TextField>
          <TextField
            sx={{ margin: "10px" }}
            variant="outlined"
            label="Description"
            value={description}
            multiline
            minRows={3}
            onChange={(e) => setDescription(e.target.value)}
          ></TextField>

          <Button
            onClick={handleSubmit}
            sx={{ margin: "10px" }}
            color="success"
            variant="contained"
            disabled={name && description ? "" : "disabled"}
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

export default AddCategory;
