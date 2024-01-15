import { useContext } from "react";
import { truckContext } from "../context/TruckContext";
const useTruckContext = () => {
  const { data } = useContext(truckContext);
  return data;
};

export default useTruckContext;
