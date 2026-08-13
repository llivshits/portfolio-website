import React, { useEffect, useRef, useState } from "react";
import Button from "./button";
import { MdEmail } from "react-icons/md";
import { HiCheck } from "react-icons/hi";

export const EMAIL = "lenliv@gmail.com";

interface EmailButtonProps {
  text?: string;
  className?: string;
}

/**
 * Email link that also copies the address to the clipboard. The mailto: link
 * still fires for visitors with a mail handler registered; the copy is the
 * fallback for those without one, who would otherwise see nothing happen.
 */
const EmailButton: React.FC<EmailButtonProps> = ({ text, className = "" }) => {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timeout.current), []);

  const handleClick = () => {
    // Unavailable outside a secure context, in which case we just let the
    // mailto: navigation happen on its own.
    navigator.clipboard?.writeText(EMAIL).then(
      () => {
        setCopied(true);
        window.clearTimeout(timeout.current);
        timeout.current = window.setTimeout(() => setCopied(false), 2000);
      },
      () => {},
    );
  };

  return (
    <>
      <Button
        text={text ? (copied ? "Copied" : text) : ""}
        icon={copied ? <HiCheck /> : <MdEmail />}
        href={`mailto:${EMAIL}`}
        aria-label={copied ? `${EMAIL} copied` : `Email ${EMAIL}`}
        className={className}
        onClick={handleClick}
      />
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? `${EMAIL} copied to clipboard` : ""}
      </span>
    </>
  );
};

export default EmailButton;
