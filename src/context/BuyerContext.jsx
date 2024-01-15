import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const buyerContext = createContext();
const BuyerContext = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/project-lauqui/customers",
          { withCredentials: true }
        );
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchCustomer();
  }, []);
  return (
    <buyerContext.Provider value={{ data }}>{children}</buyerContext.Provider>
  );
};

export default BuyerContext;
