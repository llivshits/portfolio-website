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
  uref?: string;
  "aria-label"?: string;
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
  "aria-label": ariaLabel,
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
    // Allow external links to work naturally
    if (href) {
      if (onClick) onClick();
      return;
    }

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

    if (onClick) onClick(); // Other
  };

  return (
    <a
      href={href || to || "#"}
      onClick={handleClick}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      aria-label={ariaLabel}
      className={`inline-flex items-center gap-2 ${className}`}
    >
      {icon && <span className="shrink-0 text-[1.15em]">{icon}</span>}
      {text && <span>{text}</span>}
    </a>
  );
};

export default Button;
