import Transactions from "./pages/Transactions";
import BuyerContext from "./context/BuyerContext";
import TruckerContext from "./context/TruckerContext";
import TruckContext from "./context/TruckContext";
import DriverContext from "./context/DriverContext";
import TankContext from "./context/TankContext";
function App() {
  return (
    <BuyerContext>
      <TruckerContext>
        <TruckContext>
          <DriverContext>
            <TankContext>
              <Transactions />
            </TankContext>
          </DriverContext>
        </TruckContext>
      </TruckerContext>
    </BuyerContext>
  );
}

export default App;
