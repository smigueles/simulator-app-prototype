import "./App.css";
import Stepper from "./components/stepper";
import HomePage from "./pages/home";
import { useSimulatorContext } from "./context";
function App() {
  const { simulatorData } = useSimulatorContext();
  console.log(simulatorData);
  return (
    <div className="app-container">
      {!simulatorData.userName ? <HomePage /> : <Stepper />}
    </div>
  );
}

export default App;
