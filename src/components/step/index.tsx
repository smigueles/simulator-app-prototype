import { type Option, type MediaItem } from "../../types";
import "./style.css";

const Step = ({
  title,
  options = [],
  content,
  onSelectOption,
  selectedOption,
  media = [],
}: {
  title?: string;
  options?: Array<Option>;
  content?: string;
  onSelectOption?: (option: Option) => void;
  selectedOption: Option | null;
  media?: MediaItem[];
}) => {
  const visualMedia = media.filter(
    (item) => item.type === "image" || item.type === "video"
  );
  const audioMedia = media.filter((item) => item.type === "audio");

  return (
    <div className="step-content">
      <h1 className="step-title">{title}</h1>
      {visualMedia.length > 0 && (
        <div className="media-row">
          {visualMedia.map((item, index) => {
            if (item.type === "image") {
              return (
                <img
                  key={index}
                  src={item.src}
                  alt={item.alt || "media"}
                  className="media-item"
                />
              );
            } else if (item.type === "video") {
              return (
                <video
                  key={index}
                  src={item.src}
                  autoPlay={item.autoplay}
                  loop={item.loop}
                  controls
                  className="media-item"
                />
              );
            }
            return null;
          })}
        </div>
      )}
      {audioMedia.length > 0 && (
        <div className="audio-row">
          {audioMedia.map((item, index) => (
            <audio
              key={index}
              controls
              autoPlay={item.autoplay}
              loop={item.loop}
              hidden
            >
              <source src={item.src} type="audio/mpeg" />
              Tu navegador no soporta audio.
            </audio>
          ))}
        </div>
      )}

      <p className="content">{content}</p>

      {options.map((option) => (
        <label key={option.id}>
          <input
            type="radio"
            onChange={() => onSelectOption?.(option)}
            disabled={!!selectedOption && option.id !== selectedOption.id}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default Step;
