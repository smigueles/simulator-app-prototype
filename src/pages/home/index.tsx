import { useState } from "react";
import { useSimulatorContext } from "../../context";

const HomePage = () => {
  const [userName, setUserName] = useState("");
  const { setSimulatorData } = useSimulatorContext();
  return (
    <>
      <h1>Bienvenido al simulador de simulacro de inundaciones</h1>
      <h2>Antes de continuar, indicanos tu nombre</h2>
      <input
        type="text"
        onChange={(event) => setUserName(event.target.value)}
      />
      <button
        onClick={() => setSimulatorData((prev) => ({ ...prev, userName }))}
      >
        Guardar y comenzar
      </button>
    </>
  );
};

export default HomePage;
