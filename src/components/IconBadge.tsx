import React from "react";
import './IconBadge.css';

type IconBadgeProps = {
  icon: React.ReactElement;
  label: string;
  href?: string;
};

export function IconBadge({ icon, label, href }: IconBadgeProps) {
  const inner = (
    <span className="icon-badge-inner" title={label}>
      {icon}
    </span>
  );

  if (href) {
    return (
      <a
        className="icon-badge"
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
      >
        {inner}
      </a>
    );
  }

  return (
    <div className="icon-badge" aria-label={label}>
      {inner}
    </div>
  );
}