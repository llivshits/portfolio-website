import React from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  text?: string;
  image?: string;
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text = "",
  image = "",
  href = "",
  to = "",
  className = "",
}) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (to) {
      e.preventDefault();
      navigate(to);
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
      {image && <img src={image} alt="" className="w-6 h-6" />}
      {text && <span>{text}</span>}
    </a>
  );
};

export default Button;
