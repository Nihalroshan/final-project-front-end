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
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";

const drawerWidth = 230;

const drawerLinks = [
  {
    text: "Dashboard",
    leftIcon: <DashboardOutlinedIcon color="primary" />,
    rightIcon: "",
  },
  {
    text: "Products",
    leftIcon: <ShoppingCartIcon color="primary" />,
    rightIcon: <KeyboardArrowRightIcon color="primary" />,
  },
  {
    text: "Orders",
    leftIcon: <AssessmentOutlinedIcon color="primary" />,
    rightIcon: <KeyboardArrowRightIcon color="primary" />,
  },
];

const AdminLayout = ({ children }) => {
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
        <h3>HOTEL</h3>
        <Divider />
        <List style={{ marginTop: "10px" }}>
          {drawerLinks.map((link) => (
            <ListItem
              key={link.text}
              onClick={(e) => console.log(e.target.innerText)}
              style={styles.list}
              button
            >
              <ListItemIcon>{link.leftIcon}</ListItemIcon>
              <ListItemText
                style={{ color: "#1769aa", fontWeight: "bolder" }}
                primary={link.text}
              />
              <ListItemIcon>{link.rightIcon}</ListItemIcon>
            </ListItem>
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
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
