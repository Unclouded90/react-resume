import type { ReactNode } from "react";
import "./IconBadge.css";

type IconBadgeProps = {
    icon: ReactNode;
    label: string;
    onClick?: () => void;
    href?: string;
    external?: boolean;
};

export function IconBadge({
    icon,
    label,
    onClick,
    href,
    external,
}: IconBadgeProps) {
    const clickable = !!onClick || !!href;

    if (href) {
        return (
            <a
                href={href}
                className={`icon-badge${clickable ? " icon-badge--clickable" : ""}`}
                onClick={onClick}
                aria-label={label}
                title={label}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
            >
                {icon}
            </a>
        );
    }

    return (
        <div
            className={`icon-badge${clickable ? " icon-badge--clickable" : ""}`}
            onClick={onClick}
            role={clickable ? "button" : undefined}
            aria-label={clickable ? label : undefined}
            title={label}
        >
            {icon}
        </div>
    );
}
