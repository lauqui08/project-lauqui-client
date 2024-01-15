import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const truckContext = createContext();
const TruckContext = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchTruck = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/project-lauqui/trucks",
          { withCredentials: true }
        );
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTruck();
  }, []);
  return (
    <truckContext.Provider value={{ data }}>{children}</truckContext.Provider>
  );
};

export default TruckContext;
