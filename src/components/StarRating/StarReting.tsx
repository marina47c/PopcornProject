import { useState } from "react";
import Star from "./Star";

type StarRatingProps = {
  maxRating?: number;
  color?: string;
  size?: number;
  className?: string;
  messages?: string[];
  defaultRating?: number;
  onSetRating?: (newRating: number) => void;
};

const StarRating = (props: StarRatingProps) => {
  const {
    maxRating = 5,
    color = "#fcc419",
    size = 48,
    className = "",
    messages = [],
    defaultRating = 0,
    onSetRating = () => {},
  } = props;

  const [rating, setRating] = useState<number>(defaultRating);
  const [tempRating, setTempRating] = useState<number>(0);

  const text =
    messages.length === maxRating
      ? messages[tempRating ? tempRating - 1 : rating - 1]
      : tempRating || rating || "";

  function renderStar(index: number) {
    const starRate = index + 1;
    const isFull = tempRating ? tempRating >= starRate : rating >= starRate;

    function handleRating() {
      setRating(starRate);
      onSetRating(starRate);
    }

    return (
      <Star
        key={index}
        onRate={handleRating}
        full={isFull}
        onHoverIn={() => setTempRating(starRate)}
        onHoverOut={() => setTempRating(0)}
        color={color}
        size={size}
      />
    );
  }

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color: color,
    fontSize: `${size / 1.5}px`,
  };

  return (
    <div style={containerStyles} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (element, index) =>
          renderStar(index)
        )}
      </div>
      <p style={textStyle}>{text}</p>
    </div>
  );
};

export default StarRating;

const containerStyles = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
};
