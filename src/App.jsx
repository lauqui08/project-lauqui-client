import Transactions from "./pages/Transactions";
import BuyerContext from "./context/BuyerContext";
import TruckerContext from "./context/TruckerContext";
import TruckContext from "./context/TruckContext";
function App() {
  return (
    <BuyerContext>
      <TruckerContext>
        <TruckContext>
          <Transactions />
        </TruckContext>
      </TruckerContext>
    </BuyerContext>
  );
}

export default App;
