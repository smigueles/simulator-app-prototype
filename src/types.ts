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
}

export type Option = {
  id: number;
  value: string;
  label: string;
};


export interface SimulatorData {
  userName: string;
}

export interface SimulatorContextType {
  simulatorData: SimulatorData;
  setSimulatorData: React.Dispatch<React.SetStateAction<SimulatorData>>;
}