import {
  Autocomplete,
  BottomNavigation,
  BottomNavigationAction,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import CategoryIcon from "@mui/icons-material/Category";
import { useState } from "react";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
];

const UserLayout = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <Grid height="50px" container>
        <Grid sx={{ backgroundColor: "white" }} item xs={6}></Grid>
        <Grid sx={{ backgroundColor: "white" }} item xs={6}></Grid>
      </Grid>
      <Container>
        <Stack spacing={2} sx={{ width: "100hw", margin: "10px" }}>
          <Autocomplete
            style={{ backgroundColor: "#e0e0e0" }}
            id="free-solo-demo"
            freeSolo
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => (
              <TextField {...params} label="Search food items" />
            )}
          />
        </Stack>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
          >
            <BottomNavigationAction label="Food" icon={<LocalDiningIcon />} />
            <BottomNavigationAction label="Category" icon={<CategoryIcon />} />
          </BottomNavigation>
        </Paper>
      </Container>
    </>
  );
};

export default UserLayout;
