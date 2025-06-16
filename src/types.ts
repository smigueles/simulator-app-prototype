export type StepType = {
  id: number;
  title: string;
  content?: string;
  options: { id: number; label: string; value: string }[];
};

export type Option = {
  id: number;
  value: string;
  label: string;
};
