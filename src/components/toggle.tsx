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

  const segment = "rounded px-2 py-1.5 text-sm transition-colors";
  const active = "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900";
  const inactive =
    "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100";

  const handleToggle = (next: ToggleValue) => {
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
    className: `${segment} ${current === "left" ? active : inactive} ${classAName}`,
  });

  const B = React.cloneElement<ButtonProps>(buttonB, {
    ...buttonB.props,
    status: current === "right",
    onClick: () => {
      buttonB.props.onClick?.();
      handleToggle("right");
    },
    className: `${segment} ${current === "right" ? active : inactive} ${classBName}`,
  });

  return (
    <div
      className={`inline-flex rounded-md border border-neutral-200 p-0.5 dark:border-neutral-800 ${className}`}
    >
      {A}
      {B}
    </div>
  );
};

export default Toggle;
