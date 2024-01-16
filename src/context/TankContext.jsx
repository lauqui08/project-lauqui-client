import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const tankContext = createContext();

const TankContext = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchTanks = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/project-lauqui/tanks",
          { withCredentials: true }
        );
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchTanks();
  }, []);
  return (
    <tankContext.Provider value={{ data }}>{children}</tankContext.Provider>
  );
};

export default TankContext;
