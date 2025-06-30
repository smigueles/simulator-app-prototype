export interface MediaItem {
  type: "image" | "video" | "audio";
  src: string;
  alt?: string;
  autoplay?: boolean;
  loop?: boolean;
}

export interface StepType {
  id: number;
  title: string;
  content: string;
  options: Option[];
  media?: MediaItem[];
  isLastStep?: boolean;
}

export type Option = {
  id: number;
  value: string;
  label: string;
};

export type SimulatorData = {
  userName: string;
  responsesByStep: Record<number, string | undefined>;
  timeByStep?: Record<number, number>;
};

export interface SimulatorContextType {
  simulatorData: SimulatorData;
  setSimulatorData: React.Dispatch<React.SetStateAction<SimulatorData>>;
}
