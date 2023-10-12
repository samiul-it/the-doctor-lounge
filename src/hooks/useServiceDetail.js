import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useServiceDetail = (id) => {
  const [serviceDetail, setServiceDetail] = useState([]);
  const [serviceDetailLoading, setServiceDetailLoading] = useState(true);
  // console.log(id);
  useEffect(() => {
    fetch(`https://dermacare-server.onrender.com/services/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setServiceDetail(data);
        setServiceDetailLoading(false);
      });
  }, []);

  return [serviceDetail, serviceDetailLoading];
};

export default useServiceDetail;
