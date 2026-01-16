import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface ButtonProps {
  text?: string;
  icon?: React.ReactNode;
  href?: string;
  to?: string;
  status?: boolean;
  onClick?: () => void;
  className?: string;
  uref?: string;
}

const Button: React.FC<ButtonProps> = ({
  text = "",
  icon = "",
  href = "",
  to = "",
  className = "",
  status = false,
  uref = "",
  onClick,
}) => {
  const navigate = useNavigate();

  const scroll = (elementId: string): boolean => {
    const element = document.getElementById(elementId);
    if (element) {
      if (element.classList.contains("overflow-y-auto")) {
        (element as HTMLElement).scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return true;
      }
      element.scrollIntoView({ behavior: "smooth" });
      return true;
    }
    return false;
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (uref) {
      // Scrolling to an element and navigating to it if needed
      const scrolled = scroll(uref);
      if (!scrolled && to) {
        navigate(`${to}#${uref}`);
      }
      if (onClick) onClick();
      return;
    }

    if (to) navigate(to); // Navigating to an element

    if (href) window.open(href, "_blank", "nooopener noreferrer"); // Navigating to external element

    if (onClick) onClick(); // Other
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
