import {
  Avatar,
  Badge,
  Box,
  Button,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import * as React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import HomeIcon from "@mui/icons-material/Home";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Loading from "../../Loading/Loading";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import EditIcon from "@mui/icons-material/Edit";
import { toast } from "react-toastify";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");

  // Modal Functions
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(address, phone);

    const passToDb = {
      address,
      phone,
    };

    fetch(`https://parts-station-server.onrender.com/profile/${user.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(passToDb),
    })
      .then((res) => {
        res.json();
        toast.success("Information Added");
      })
      .then((data) => console.log(data));
  };

  // Modal Styling for
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
  };

  if (loading) {
    return <Loading></Loading>;
  }

  //   Avatar Styling

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: user?.emailVerified ? "#44b700" : "#d10c08",
      color: user?.emailVerified ? "#44b700" : "#d10c08",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));

  //   console.log(user);
  return (
    <div>
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
                  Welcome to My Profile
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h6" component="div">
                  Pay
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem>
              <ListItemAvatar>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar alt="Remy Sharp" src={user?.photoURL} />
                </StyledBadge>
              </ListItemAvatar>
              <ListItemText
                primary={user?.displayName}
                secondary={user?.email}
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PermPhoneMsgIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Phone" secondary="Jan 7, 2014" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <HomeIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Address" secondary="July 20, 2014" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <IconButton onClick={handleOpen}>
                  <Avatar>
                    <EditIcon />
                  </Avatar>
                </IconButton>
              </ListItemAvatar>
              <ListItemText primary="Edit Details" secondary="Last edited" />
            </ListItem>
          </List>
        </Box>

        {/* Modal  */}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              variant="overline"
              sx={{
                fontSize: { xs: 14, lg: 15 },
                color: { xs: "#ef6c00", lg: "#ef6c00" },
              }}
              id="modal-modal-title"
            >
              Please enter your informations
            </Typography>

            <form onSubmit={handleFormSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="phone"
                label="Phone Number"
                type="number"
                id="phone"
                color="secondary"
                autoFocus
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                }}
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="address"
                label="Address"
                type="text"
                id="address"
                color="secondary"
                autoFocus
                value={address}
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
              />
              <Button
                style={{
                  backgroundColor: "#4db2ac",
                }}
                sx={{ mt: 1 }}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                //  className={classes.submit}
                //   onClick={handleFormSubmit}
              >
                Update Informations
              </Button>
            </form>

            <Button
              style={{
                backgroundColor: "#ff1744",
              }}
              sx={{ mt: 1 }}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              //  className={classes.submit}
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Box>
        </Modal>
      </Box>
    </div>
  );
};

export default MyProfile;
