import { useContext } from "react";
import { tankContext } from "../context/TankContext";
const useTankContext = () => {
  const { data } = useContext(tankContext);
  return data;
};

export default useTankContext;
