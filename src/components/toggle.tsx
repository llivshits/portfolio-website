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
        ? `px-4 py-2 rounded-lg bg-emerald-600 dark:bg-emerald-500 text-white font-medium transition-colors ${classAName}`
        : `px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${classAName}`,
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
        ? `px-4 py-2 rounded-lg bg-emerald-600 dark:bg-emerald-500 text-white font-medium transition-colors ${classBName}`
        : `px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${classBName}`,
  });

  return (
    <div
      className={`inline-flex gap-0 rounded-lg border border-gray-200 dark:border-gray-700 p-1 bg-white dark:bg-gray-900 ${className}`}
    >
      {A}
      {B}
    </div>
  );
};

export default Toggle;
