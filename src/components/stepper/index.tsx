import { useState } from "react";
import Step from "../step";
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
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const { simulatorData } = useSimulatorContext();
  const steps = getSteps();
  const currentStep = steps.find((step) => step.id === currentStepId);

  const nextStep = (nextId?: string) => {
    setSelectedOption(null);
    return nextId && setCurrentStepId(Number(nextId));
  };

  return (
    <div className="step-container">
      <h1 className="stepper-title">Contenedor principal</h1>
      <h3>Hola, {simulatorData.userName}</h3>
      <Step
        key={currentStep?.id}
        options={currentStep?.options}
        title={currentStep?.title}
        content={currentStep?.content}
        onSelectOption={(option: Option) => {
          return setSelectedOption(option);
        }}
        selectedOption={selectedOption}
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
