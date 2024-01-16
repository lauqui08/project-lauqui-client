import { useContext } from "react";
import { driverContext } from "../context/DriverContext";
const useDriverContext = () => {
  const { data } = useContext(driverContext);
  return data;
};

export default useDriverContext;
