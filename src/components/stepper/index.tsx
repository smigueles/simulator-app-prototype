import { useState } from "react";
import Step from "../step";
import "./style.css";
import { getSteps } from "./utils";
import { type Option } from "../../types";

export type StepType = {
  id: number;
  title: string;
  content?: string;
  options: { id: number; label: string; value: string }[];
  nextStep: () => void;
};

const Stepper = () => {
  const [currentStepId, setCurrentStepId] = useState<number>(1);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const steps = getSteps();
  const currentStep = steps.find((step) => step.id === currentStepId);

  const nextStep = (nextId?: string) => {
    setSelectedOption(null);
    return nextId && setCurrentStepId(Number(nextId));
  };

  return (
    <div className="step-container">
      <audio autoPlay hidden loop>
        <source src="sonido_tormenta.mp3" />
      </audio>
      <h1 className="stepper-title">Contenedor principal</h1>
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
        onClick={() => nextStep?.(selectedOption?.value)}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Stepper;
