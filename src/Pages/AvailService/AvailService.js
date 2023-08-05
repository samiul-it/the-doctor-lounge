import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useServices from "../../hooks/useServices";

const AvailService = () => {
  const [user] = useAuthState(auth);
  const phoneRef = useRef("");
  const nameRef = useRef("");
  const addressRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const address = addressRef.current.value;

    console.log(name, phone, address);

    toast.success("Successfully Confirmed!", {
      theme: "colored",
    });
    toast.info(`Name:${name}`);
    toast.info(`Phone:${phone}`);
    toast.info(`Address:${address}`);
  };

  const { serviceName } = useParams();

  return (
    <div>
      <ToastContainer />

      <h1>Thank you for choosing! Please fill up the form below</h1>
      <div className="form">
        <h2>Booking For {serviceName}</h2>
        <h2 className="text-primary">Enter informations</h2>

        <form onSubmit={handleSubmit}>
          <input type="email" value={user.email} readOnly />
          <br />
          <input
            ref={nameRef}
            type="text"
            name="name"
            id="name"
            required
            placeholder="Enter Your Name"
          />
          <br />
          <input
            ref={phoneRef}
            type="number"
            name="email"
            id="email"
            placeholder="Enter Your Phone Number"
            required
          />
          <br />
          <input
            ref={addressRef}
            type="text"
            name="address"
            id="address"
            placeholder="Enter Your Address"
            required
          />
          <br />
          <button className="btn btn-warning">Update Booking Info</button>
        </form>
      </div>
    </div>
  );
};

export default AvailService;
