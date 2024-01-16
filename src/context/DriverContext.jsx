import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const driverContext = createContext();

const DriverContext = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/project-lauqui/drivers",
          { withCredentials: true }
        );
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchDrivers();
  }, []);
  return (
    <driverContext.Provider value={{ data }}>{children}</driverContext.Provider>
  );
};

export default DriverContext;
