import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useServiceDetail = (id) => {
  const [serviceDetail, setServiceDetail] = useState([]);
  // console.log(id);
  useEffect(() => {
    fetch(`http://localhost:5000/services/${id}`)
      .then((res) => res.json())
      .then((data) => setServiceDetail(data));
  }, []);

  return [serviceDetail, setServiceDetail];
};

export default useServiceDetail;
