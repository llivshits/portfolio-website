import React, { useState } from "react";
import Button from "./button";

type ButtonProps = React.ComponentProps<typeof Button>;

type ToggleValue = "left" | "right";

interface ToggleProps {
  buttonA: React.ReactElement<ButtonProps>;
  buttonB: React.ReactElement<ButtonProps>;
  value?: ToggleValue;
  defaultValue?: ToggleValue;
  onToggle?: (value: ToggleValue) => void;
  className?: string;
  classAName?: string;
  classBName?: string;
}

const Toggle: React.FC<ToggleProps> = ({
  buttonA,
  buttonB,
  value,
  defaultValue = "left",
  onToggle,
  className = "",
  classAName = "",
  classBName = "",
}) => {
  const [internalValue, setInternalValue] = useState<ToggleValue>(defaultValue);
  const current = value ?? internalValue;

  const handleToggle = (next: ToggleValue) => {
    console.log("handleToggle", { current, next });
    if (current === next) return;
    if (value === undefined) setInternalValue(next);
    onToggle?.(next);
  };

  const A = React.cloneElement<ButtonProps>(buttonA, {
    ...buttonA.props,
    status: current === "left",
    onClick: () => {
      buttonA.props.onClick?.();
      handleToggle("left");
    },
    className:
      current === "left"
        ? `text-black bg-white dark:bg-black dark:text-white ${classAName}`
        : `text-white bg-black hover:text-white hover:bg-yellow-500 dark:bg-white dark:text-black dark:hover:text-black dark:hover:bg-black${classBName}`,
  });

  const B = React.cloneElement<ButtonProps>(buttonB, {
    ...buttonB.props,
    status: current === "right",
    onClick: () => {
      buttonB.props.onClick?.();
      handleToggle("right");
    },
    className:
      current === "right"
        ? `text-black bg-white dark:bg-black dark:text-white ${classBName}`
        : `text-white bg-black hover:text-white hover:bg-yellow-500 dark:bg-white dark:text-black dark:hover:text-black dark:hover:bg-black${classBName}`,
  });

  return (
    <div className={`inline-flex gap-2 ${className}`}>
      {A}
      {B}
    </div>
  );
};

export default Toggle;
