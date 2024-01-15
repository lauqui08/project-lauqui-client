import { useContext } from "react";
import { truckerContext } from "../context/TruckerContext";
const useTruckerContext = () => {
  const { data } = useContext(truckerContext);
  return data;
};

export default useTruckerContext;
