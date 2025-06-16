import { type Option } from "../../types";
import "./style.css";

const Step = ({
  title,
  options = [],
  content,
  onSelectOption,
  selectedOption,
}: {
  title?: string;
  options?: Array<Option>;
  content?: string;
  onSelectOption?: (option: Option) => void;
  selectedOption: Option | null;
}) => {
  return (
    <>
      <h1 className="step-title">{title}</h1>
      <p className="content">{content}</p>
      {options.map((option) => (
        <label key={option.id}>
          <input
            disabled={!!selectedOption && option.id !== selectedOption.id}
            onChange={() => onSelectOption?.(option)}
            type="radio"
          />{" "}
          {option.label}
        </label>
      ))}
    </>
  );
};

export default Step;
