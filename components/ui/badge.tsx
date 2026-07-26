import { ReactNode } from "react";

type Variant = "default" | "soft" | "warning" | "danger";

export function Badge({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: Variant;
}) {
  return (
    <span className={`badge badge-${variant}`}>
      {children}
      <style jsx>{`
        .badge {
          width: fit-content;
          display: inline-flex;
          align-items: center;
          min-height: 28px;
          padding: 4px 10px;
          border-radius: 999px;
          font-size: .77rem;
          font-weight: 820;
        }
        .badge-default { color: white; background: var(--green-900); }
        .badge-soft { color: var(--green-900); background: var(--green-100); }
        .badge-warning { color: var(--yellow-700); background: var(--yellow-100); }
        .badge-danger { color: var(--red-700); background: var(--red-100); }
      `}</style>
    </span>
  );
}
