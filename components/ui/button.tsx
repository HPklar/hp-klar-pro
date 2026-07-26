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
    <button className={`button button-${variant} ${className}`} {...props}>
      {children}
      <style jsx>{`
        .button {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 17px;
          border: 1px solid transparent;
          border-radius: var(--radius-sm);
          font-weight: 780;
          cursor: pointer;
          transition: transform 160ms ease, background 160ms ease, box-shadow 160ms ease;
        }
        .button:hover { transform: translateY(-1px); }
        .button-primary {
          color: white;
          background: var(--green-900);
          box-shadow: 0 8px 18px rgba(29,81,63,.18);
        }
        .button-primary:hover { background: var(--green-800); }
        .button-secondary {
          color: var(--green-900);
          background: white;
          border-color: var(--green-200);
        }
        .button-ghost { color: var(--green-900); background: transparent; }
        .button-danger { color: white; background: var(--red-700); }
      `}</style>
    </button>
  );
}
