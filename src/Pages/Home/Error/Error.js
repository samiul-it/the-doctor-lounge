import { Alert } from "@mui/material";
import React from "react";

const Error = () => {
  return (
    <div>
      <Alert variant="filled" severity="error">
        404- Not Found
      </Alert>
    </div>
  );
};

export default Error;
