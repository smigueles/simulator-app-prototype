import { useState, useEffect } from "react";
import Step from "../step";
import FinalResult from "../results";
import Timer from "../timer";
import "./style.css";
import { getSteps } from "./utils";
import { type Option } from "../../types";
import { useSimulatorContext } from "../../context";

export type StepType = {
  id: number;
  title: string;
  content?: string;
  options: { id: number; label: string; value: string }[];
  nextStep: () => void;
};

const Stepper = () => {
  const [currentStepId, setCurrentStepId] = useState<number>(1);
  const [showResult, setShowResults] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [startTime, setStartTime] = useState<number>(Date.now());
  const steps = getSteps();
  const currentStep = steps.find((step) => step.id === currentStepId);
  const { setSimulatorData } = useSimulatorContext();

  useEffect(() => {
    setStartTime(Date.now());
  }, [currentStepId]);

  const NoResponseOption: Option = {
    id: 0,
    value: "no-response",
    label: "No response",
  };

  const nextStep = (selectedOption: Option | null) => {
    const endTime = Date.now();
    const timeTaken = Math.floor((endTime - startTime) / 1000);

    setSimulatorData((prev) => ({
      ...prev,
      responsesByStep: {
        ...prev.responsesByStep,
        [currentStepId]: selectedOption?.value,
      },
      timeByStep: {
        ...prev.timeByStep,
        [currentStepId]: timeTaken,
      },
    }));

    setSelectedOption(null);

    if (currentStep?.isLastStep) {
      return setShowResults(true);
    }

    setCurrentStepId((prev) => prev + 1);
  };

  return (
    <div className="step-container">
      <audio autoPlay hidden loop>
        <source src="sounds/sonido_tormenta.mp3" />
      </audio>
      {!showResult ? (
        <div key={currentStepId} className="step-transition">
          <Timer
            keyTrigger={currentStepId}
            onTimeout={() => {
              console.log("Tiempo agotado, avanzando sin respuesta");
              nextStep(NoResponseOption);
            }}
          />
          <Step
            key={currentStep?.id}
            options={currentStep?.options}
            title={currentStep?.title}
            content={currentStep?.content}
            onSelectOption={(option: Option) => {
              return setSelectedOption(option);
            }}
            selectedOption={selectedOption}
            media={currentStep?.media}
          />
          <button
            className="next-button"
            onClick={() => nextStep?.(selectedOption)}
          >
            Siguiente
          </button>
        </div>
      ) : (
        <FinalResult />
      )}
    </div>
  );
};

export default Stepper;
