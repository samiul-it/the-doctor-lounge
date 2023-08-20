import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import * as React from "react";
import Drawer from "react-modern-drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AddchartIcon from "@mui/icons-material/Addchart";

import "react-modern-drawer/dist/index.css";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  // Drawer

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  // Dashboard Menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button onClick={toggleDrawer}>Show</button>
      <button onClick={toggleDrawer}>Show</button>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="bla bla bla"
      >
        <Box sx={{ overflow: "auto" }}>
          <List>
            {[
              { routeName: "Appoinments", path: "appoinments" },
              { routeName: "Manage Services", path: "manage-services" },
              { routeName: "My Profile", path: "profile" },
              { routeName: "Upgrade", path: "upgrade" },
            ].map((route, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <AddchartIcon />}
                  </ListItemIcon>
                  <Link to={`/dashboard/${route?.path}`}>
                    <ListItemText primary={route?.routeName} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>

      {/* Dashboard Menu  */}

      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
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
        <MenuItem onClick={handleClose}>Patients</MenuItem>
        <MenuItem onClick={handleClose}>Upgrade</MenuItem>
      </Menu>

      {/* <li>
        <Link to="/dashboard/add-service">Add New Service</Link>
        <Link to="/dashboard/add-service">Add New Service</Link>
        <Link to="/dashboard/add-service">Add New Service</Link>
        <Link to="/dashboard/add-service">Add New Service</Link>
      </li>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: { xs: 360, lg: 699 },
            bgcolor: "background.paper",
          }}
        >
          <Box sx={{ my: 3, mx: 2 }}>
            <Grid container alignItems="center">
              <Grid item></Grid>
              <Grid item xs>
                <Typography
                  variant="overline"
                  sx={{
                    fontSize: { xs: 18, lg: 25 },
                    color: { xs: "#ef6c00", lg: "#ef6c00" },
                  }}
                >
                  Welcome to Dashboard
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h6" component="div">
                  Pay
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box> */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
