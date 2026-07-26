import { HTMLAttributes, ReactNode } from "react";

export function Card({
  children,
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div className={`hp-card ${className}`} {...props}>
      {children}
      <style jsx>{`
        .hp-card {
          padding: 22px;
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          background: var(--surface);
          box-shadow: var(--shadow-sm);
        }
      `}</style>
    </div>
  );
}
