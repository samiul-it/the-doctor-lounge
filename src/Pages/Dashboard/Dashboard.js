import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
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

  return (
    <div>
      <button onClick={toggleDrawer}>Show</button>
      <Outlet />
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
              { routeName: "Patients", path: "patients" },
              { routeName: "Upgrade", path: "upgrade" },
            ].map((route, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <AddchartIcon />}
                  </ListItemIcon>
                  <Link to={`/dashboard/${route.path}`}>
                    <ListItemText primary={route.routeName} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>

      <li>
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
      </Box>
    </div>
  );
};

export default Dashboard;
