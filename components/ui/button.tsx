import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger";

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: Variant;
}) {
  return (
    <button className={`hp-button hp-button-${variant} ${className}`} {...props}>
      {children}
      <style jsx>{`
        .hp-button {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 17px;
          border: 1px solid transparent;
          border-radius: var(--radius-sm);
          font-weight: 760;
          cursor: pointer;
          transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
        }
        .hp-button:hover { transform: translateY(-1px); }
        .hp-button-primary {
          color: white;
          background: var(--green-900);
          box-shadow: 0 8px 18px rgba(33,84,63,.18);
        }
        .hp-button-primary:hover { background: var(--green-800); }
        .hp-button-secondary {
          color: var(--green-900);
          background: white;
          border-color: var(--green-200);
        }
        .hp-button-ghost { color: var(--green-900); background: transparent; }
        .hp-button-danger { color: white; background: var(--red-700); }
      `}</style>
    </button>
  );
}
