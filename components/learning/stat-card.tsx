import { Card } from "../ui/card";

export function StatCard({
  icon,
  label,
  value,
  detail,
}: {
  icon: string;
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <Card>
      <div className="icon">{icon}</div>
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{detail}</small>
      <style jsx>{`
        .icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          margin-bottom: 14px;
          border-radius: 14px;
          background: var(--green-100);
        }
        span, small { display: block; color: var(--ink-700); }
        span { font-size: .82rem; font-weight: 700; }
        strong {
          display: block;
          margin: 4px 0;
          color: var(--green-950);
          font-family: "Plus Jakarta Sans", sans-serif;
          font-size: 1.65rem;
          letter-spacing: -.04em;
        }
        small { font-size: .76rem; }
      `}</style>
    </Card>
  );
}
