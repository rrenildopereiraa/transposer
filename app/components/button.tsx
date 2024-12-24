import React from "react";
import Icon from "./icon";

type ButtonProps = {
  onClick: () => void;
  label: string;
  icon?: "copy" | "convert";
  className?: string;
  iconPosition?: "left" | "right";
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  icon,
  className = "bg-white fw-600 h:bg-l-silver-6 px-4 py-2 rad-1 tc-black",
  iconPosition = "left",
}) => {
  return (
    <button onClick={onClick} className={`ai-c d-f mt-5 g-2 jc-c ${className}`}>
      {icon && iconPosition === "left" && <Icon name={icon} />}
      <span>{label}</span>
      {icon && iconPosition === "right" && <Icon name={icon} />}
    </button>
  );
};

export default Button;
