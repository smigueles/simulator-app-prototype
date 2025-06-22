// src/pages/home/index.tsx
import { useState } from "react";
import { useSimulatorContext } from "../../context";
import "./style.css";
import { type SimulatorData } from '../../types'

const HomePage = () => {
  const [userName, setUserName] = useState("");
  const { setSimulatorData } = useSimulatorContext();

  const handleStart = () => {
    if (userName.trim()) {
      setSimulatorData((prev: SimulatorData) => ({ ...prev, userName }));
    }
  };

  return (
    <div className="home-container">
      <div className="home-box">
        <h1 className="home-title">
          🌊 Bienvenido al Simulador de Inundaciones
        </h1>
        <p className="home-subtitle">
          Antes de comenzar, necesitamos saber tu nombre.
        </p>
        <input
          className="home-input"
          type="text"
          placeholder="Escribí tu nombre..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button className="home-button" onClick={handleStart}>
          Guardar y comenzar
        </button>
      </div>
    </div>
  );
};

export default HomePage;
