import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useServices from "../../../hooks/useServices";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
const ServiceTable = () => {
  const [services, setServices, serviceLoading] = useServices();
  const [serviceName, setServiceName] = React.useState("");
  const [imageLink, setImageLink] = React.useState("");
  const [fees, setFees] = React.useState("");

  // Modal Functions
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(serviceName, imageLink, fees);
  };

  // Modal Styling for Password Reset
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

  //   console.log(services);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#SL</TableCell>
              <TableCell>Service ID</TableCell>
              <TableCell align="right">Service Name</TableCell>
              <TableCell align="right">Img</TableCell>
              <TableCell align="right">Fees</TableCell>

              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {services.map((service, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell component="th" scope="row">
                  {service._id.substr(-5)}
                </TableCell>
                <TableCell align="right">{service.serviceName}</TableCell>
                <TableCell align="right">
                  <Avatar
                    alt="Remy Sharp"
                    src={service.img}
                    sx={{ width: 56, height: 56 }}
                  />
                </TableCell>
                <TableCell align="right">{service.fees}</TableCell>

                <TableCell align="right">Action</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="right">
                <IconButton
                  onClick={handleOpen}
                  aria-label="delete"
                  size="large"
                >
                  <AddCircleIcon fontSize="inherit" />
                </IconButton>
              </TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

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
            Please enter new service informations
          </Typography>

          <form onSubmit={handleFormSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="serviceName"
              label="serviceName"
              type="text"
              id="serviceName"
              color="secondary"
              autoFocus
              value={serviceName}
              onChange={(event) => {
                setServiceName(event.target.value);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="image"
              label="image"
              type="text"
              id="image"
              color="secondary"
              autoFocus
              value={imageLink}
              onChange={(event) => {
                setImageLink(event.target.value);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="fees"
              label="fees"
              type="text"
              id="fees"
              color="secondary"
              autoFocus
              value={fees}
              onChange={(event) => {
                setFees(event.target.value);
              }}
            />
            <Button
              style={{
                backgroundColor: "#4caf50",
              }}
              sx={{ mt: 1 }}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              //  className={classes.submit}
              //   onClick={handleFormSubmit}
            >
              Add Service
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
    </div>
  );
};

export default ServiceTable;
