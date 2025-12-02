import React from "react";
import "./ExpandLink.css";

type ExpandLinkProps = {
  label: string;
  onClick?: () => void;
  className?: string;
};

export function ExpandLink({ label, onClick, className = "" }: ExpandLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClick?.();
  };

  return (
    <button
      type="button"
      className={`expand-link ${className}`}
      onClick={handleClick}
    >
      <span>{label}</span>
      <span className="expand-link-arrow">→</span>
    </button>
  );
}
