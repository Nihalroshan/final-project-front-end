import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
} from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import CategoryIcon from "@mui/icons-material/Category";
import { Link, Outlet } from "react-router-dom";

const drawerWidth = 200;

const drawerLinks = [
  // {
  //   text: "Dashboard",
  //   leftIcon: <DashboardOutlinedIcon color="primary" />,
  //   path: "",
  // },
  {
    text: "Products",
    leftIcon: <ShoppingCartIcon color="primary" />,
    path: "/admin/products",
  },
  {
    text: "Categories",
    leftIcon: <CategoryIcon color="primary" />,
    path: "/admin/categories",
  },
  {
    text: "Orders",
    leftIcon: <AssessmentOutlinedIcon color="primary" />,
    path: "/admin/orders",
  },
];

const AdminLayout = () => {
  const styles = {
    appbar: {
      backgroundColor: "white",
      width: `calc(100% - ${drawerWidth}px)`,
      borderBottom: "1px solid #e0e0e0",
      height: "63px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "flex-end",
    },
  };

  return (
    <div style={{ display: "flex" }}>
      <AppBar elevation={0} style={styles.appbar}></AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <h3 style={{ visibility: "hidden" }}>HOTEL</h3>
        <Divider />
        <List style={{ marginTop: "10px" }}>
          {drawerLinks.map((link, i) => (
            <Link key={i} style={{ textDecoration: "none" }} to={link.path}>
              <ListItem key={link.text} style={styles.list} button>
                <ListItemIcon>{link.leftIcon}</ListItemIcon>
                <ListItemText
                  style={{ color: "#6642b4", fontWeight: "bolder" }}
                  primary={link.text}
                />
                {/* <ListItemIcon>{link.rightIcon}</ListItemIcon> */}
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <div
        style={{
          marginTop: "58px",
          width: "100%",
          height: `calc(100vh - 58px)`,
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
