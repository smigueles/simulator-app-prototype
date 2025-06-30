import { useEffect, useState } from "react";
import "./style.css";

type TimerProps = {
  keyTrigger: number;
  onTimeout?: () => void;
};

const Timer = ({ keyTrigger, onTimeout }: TimerProps) => {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    setSeconds(30);
  }, [keyTrigger]);

  useEffect(() => {
    if (seconds === 0) {
      onTimeout?.();
      return;
    }

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimeout, seconds]);

  // Agregamos clase para urgencia si quedan 5 segundos o menos
  const urgencyClass = seconds <= 5 ? "urgent" : "";

  return (
    <div className={`timerBox fixedTimer ${urgencyClass}`}>
      <p className="timerText">
        Tiempo restante: <span>{seconds}</span> segundos
      </p>
    </div>
  );
};

export default Timer;
