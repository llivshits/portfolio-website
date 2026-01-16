import React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  text?: string;
  icon?: React.ReactNode;
  href?: string;
  to?: string;
  status?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text = "",
  icon = "",
  href = "",
  to = "",
  className = "",
  status = false,
  onClick,
}) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (to) {
      e.preventDefault();
      navigate(to);
    }

    if (onClick) {
      onClick();
    }
  };

  return (
    <a
      href={href || to || "#"}
      onClick={handleClick}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-2 px-4 py-2 ${className}`}
    >
      {icon && <span className="text-xl">{icon}</span>}
      {text && <span>{text}</span>}
    </a>
  );
};

export default Button;
