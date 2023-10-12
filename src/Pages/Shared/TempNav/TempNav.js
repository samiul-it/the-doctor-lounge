import { Avatar, Box, CardMedia, Menu, MenuItem, Stack } from "@mui/material";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import Loading from "../../Loading/Loading";
import { signOut } from "firebase/auth";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AccountCircle } from "@mui/icons-material";

const drawerWidth = 240;
const navItems = [
  {
    pageName: "Home",
    to: "/home",
  },
  {
    pageName: "Services",
    to: "/services",
  },
  {
    pageName: "My Appoinments",
    to: "/my-appoinments",
  },
  {
    pageName: "Blog",
    to: "/blog",
  },
  {
    pageName: "About",
    to: "/about",
  },
  {
    pageName: "Dashboard",
    to: "/dashboard",
  },
];

const TempNav = (props) => {
  const preventDefault = (event) => event.preventDefault();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [user, loading] = useAuthState(auth);

  // Dashboard Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    if (loading) {
      <Loading></Loading>;
    }
    signOut(auth);
  };
  if (loading) {
    return <Loading></Loading>;
  }

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // Mobile View

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <CardMedia
        component="img"
        sx={{
          width: { xs: 100, lg: 120 },
          marginTop: { xs: 0, lg: 0 },
          margin: "auto",
        }}
        image="https://i.ibb.co/t8xLK9X/2De.png"
        alt="Live from space album cover"
      />
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              component={Link}
              to={item?.to}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item?.pageName} />
            </ListItemButton>
          </ListItem>
        ))}
        {user ? (
          <Button onClick={handleSignOut} sx={{ color: "black" }}>
            <Avatar alt="Remy Sharp" src={user?.photoURL} />
            Sign Out
          </Button>
        ) : (
          <>
            <Button component={Link} to="/login" sx={{ color: "black" }}>
              Login
            </Button>
            <Button component={Link} to="/signup" sx={{ color: "black" }}>
              Sign Up
            </Button>
          </>
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  // console.log(user);
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar sx={{ backgroundColor: "#fff" }} elevation={1} component="nav">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon sx={{ color: "#ff1744" }} />
            </IconButton>
            <CardMedia
              component="img"
              sx={{
                width: { xs: 100, lg: 120 },
                marginTop: { xs: 0, lg: 0 },
                margin: "auto",
              }}
              image="https://i.ibb.co/t8xLK9X/2De.png"
              alt="Live from space album cover"
            />
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item, index) =>
                index === 5 ? (
                  <Button
                    key={index}
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    sx={{
                      color: "#ff1744",
                      fontFamily: "Segoe UI",
                    }}
                  >
                    Dashboard
                  </Button>
                ) : (
                  <Button
                    component={Link}
                    to={item?.to}
                    key={index}
                    sx={{ color: "#ff1744", fontFamily: "Segoe UI" }}
                  >
                    {item?.pageName}
                  </Button>
                )
              )}
              {user ? (
                <Button onClick={handleSignOut} sx={{ color: "#ff1744" }}>
                  <Avatar alt="Remy Sharp" src={user?.photoURL} />
                  Sign Out
                </Button>
              ) : (
                <>
                  <Button
                    component={Link}
                    to="/login"
                    sx={{ color: "#ff1744" }}
                  >
                    Login
                  </Button>
                  <Button
                    component={Link}
                    to="/signup"
                    sx={{ color: "#ff1744" }}
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>

      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>

      {/* Dashboard Menu  */}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          to={"/dashboard/appoinments"}
          component={Link}
          onClick={handleClose}
        >
          Appoinments
        </MenuItem>
        <MenuItem
          to={"/dashboard/manage-services"}
          component={Link}
          onClick={handleClose}
        >
          Manage Services
        </MenuItem>
        <MenuItem
          component={Link}
          to={"/dashboard/profile"}
          onClick={handleClose}
        >
          My Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>Upgrade</MenuItem>
      </Menu>
    </div>
  );
};

export default TempNav;
