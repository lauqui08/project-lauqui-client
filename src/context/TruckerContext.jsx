import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const truckerContext = createContext();
const TruckerContext = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchruckerData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/project-lauqui/truckings",
          { withCredentials: true }
        );
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchruckerData();
  }, []);
  return (
    <truckerContext.Provider value={{ data }}>
      {children}
    </truckerContext.Provider>
  );
};

export default TruckerContext;
