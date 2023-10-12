import { useEffect, useState } from "react";

const useServices = () => {
  const [service, setService] = useState([]);
  const [serviceLoading, setServiceLoading] = useState(true);
  useEffect(() => {
    fetch("https://dermacare-server.onrender.com/services")
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        setServiceLoading(false);
      });
  }, []);

  return [service, setService, serviceLoading];
};

export default useServices;
