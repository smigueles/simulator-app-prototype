import { useSimulatorContext } from "../../context";
import "./style.css";

const TopBar = ({ onBack }: { onBack: () => void }) => {
  const { simulatorData } = useSimulatorContext();
  console.log(simulatorData, "data");
  return (
    <header className="topbar">
      <button onClick={onBack} className="topbar-back">
        ⬅ Volver
      </button>
      <span className="topbar-user">👤 {simulatorData.userName}</span>
    </header>
  );
};

export default TopBar;
