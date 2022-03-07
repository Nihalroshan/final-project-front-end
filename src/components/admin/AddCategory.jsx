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

const AddCategory = ({ toggleDrawer }) => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  const handleSubmit = () => {
    const categoryDetails = {
      name,
      description,
    };
    console.log(categoryDetails);
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

export default AddCategory;
