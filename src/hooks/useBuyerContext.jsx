import { useContext } from "react";
import { buyerContext } from "../context/BuyerContext";
const useBuyerContext = () => {
  const { data } = useContext(buyerContext);
  return data;
};

export default useBuyerContext;
