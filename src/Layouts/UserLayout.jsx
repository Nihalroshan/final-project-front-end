import {
  Grid,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Badge,
} from "@mui/material";

import { useState } from "react";

import LocalDiningIcon from "@mui/icons-material/LocalDining";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Outlet, useNavigate } from "react-router-dom";

const UserLayout = () => {
  const [value, setValue] = useState(0);

  let navigate = useNavigate();

  return (
    <>
      <Grid height="50px" justifyContent="center" alignItems="center" container>
        <Grid sx={{ backgroundColor: "white" }} item xs={1}>
          <Typography variant="h5">Menu</Typography>
        </Grid>
      </Grid>
      <div style={{ marginBottom: "60px" }}>
        <Outlet />
      </div>
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
          <BottomNavigationAction
            onClick={() => navigate("/products")}
            icon={<LocalDiningIcon />}
          />
          <BottomNavigationAction
            onClick={() => navigate("/categories")}
            icon={<CategoryIcon />}
          />
          <BottomNavigationAction
            onClick={() => navigate("/cart")}
            icon={
              <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon />
              </Badge>
            }
          />
        </BottomNavigation>
      </Paper>
    </>
  );
};

export default UserLayout;
