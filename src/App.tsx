import "./App.css";
import Stepper from "./components/stepper";
import HomePage from "./pages/home";
import TopBar from "./components/topbar";
import { useSimulatorContext } from "./context";

function App() {
  const { simulatorData, setSimulatorData } = useSimulatorContext();

  const handleBack = () => {
    setSimulatorData({ userName: "", responsesByStep: {} });
  };

  return (
    <div className="app-container">
      {simulatorData.userName && <TopBar onBack={handleBack} />}
      {!simulatorData.userName ? <HomePage /> : <Stepper />}
    </div>
  );
}

export default App;
