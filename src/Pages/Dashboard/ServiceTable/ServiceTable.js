import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
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
import Loading from "../../Loading/Loading";
import { toast } from "react-toastify";

const ServiceTable = () => {
  const [services, setServices, serviceLoading] = useServices();
  const [serviceName, setServiceName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [img, setImg] = React.useState("");
  const [fees, setFees] = React.useState("");

  // Modal Functions
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log(serviceName, imageLink, fees);

    const newService = {
      serviceName,
      fees,
      description,
      img,
    };

    const url = "http://localhost:5000/services";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => {
        if (res.status == 403 || 401) {
          // console.log(res);
        }
        return res.json();
      })
      .then((result) => console.log(result))
      .then(toast.success("Service Added !"));
  };

  // Deleting a service

  const handleDeleteService = (id) => {
    const confirmDelete = window.confirm("Are you Sure?");
    if (confirmDelete) {
      const url = `http://localhost:5000/delete-service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.info("Service Deleted");
          const remaining = services.filter((item) => item._id !== id);
          setServices(remaining);
        });
    }
  };

  // Updating Service

  // const handleServiceUpdate = (e, id) => {
  //   e.preventDefault();

  //   const descriptionUpdate = descriptionUpdateRef.current.value;

  //   const url = `http://localhost:5000/update-service/${id}`;

  //   fetch(url, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify({ descriptionUpdate }),
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result);
  //       handleClose();
  //     })
  //     .then(toast.success("Success!Task Updated"));
  // };

  const handleUpdate = (id) => {
    console.log(id);
    handleOpen();
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

  if (serviceLoading) {
    return <Loading></Loading>;
  }

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

                <TableCell align="right">
                  <Box sx={{ mt: 1 }} variant="contained" color="primary">
                    {/* <EditIcon onClick={() => handleUpdate(service._id)} /> */}
                    <DeleteIcon
                      onClick={() => handleDeleteService(service._id)}
                    />
                  </Box>
                </TableCell>
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
              label="Service Name"
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
              name="description"
              label="Description"
              type="text"
              id="description"
              color="secondary"
              autoFocus
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="image"
              label="Image Link"
              type="text"
              id="image"
              color="secondary"
              autoFocus
              value={img}
              onChange={(event) => {
                setImg(event.target.value);
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="fees"
              label="Fees"
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
