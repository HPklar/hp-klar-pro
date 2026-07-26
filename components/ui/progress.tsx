export function ProgressBar({ value }: { value: number }) {
  const safe = Math.max(0, Math.min(100, value));
  return (
    <div className="track" aria-label={`${safe} Prozent abgeschlossen`}>
      <div className="fill" style={{ width: `${safe}%` }} />
      <style jsx>{`
        .track {
          height: 10px;
          overflow: hidden;
          margin-top: 10px;
          border-radius: 999px;
          background: var(--green-100);
        }
        .fill {
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, var(--green-900), var(--sage-500));
          transition: width 250ms ease;
        }
      `}</style>
    </div>
  );
}

export function ProgressRing({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  const safe = Math.max(0, Math.min(100, value));
  return (
    <div
      className="progress-ring"
      style={{ background: `conic-gradient(var(--green-900) ${safe * 3.6}deg, var(--green-100) 0deg)` }}
    >
      <div className="inside">
        <strong>{safe}%</strong>
        <span>{label}</span>
      </div>
      <style jsx>{`
        .progress-ring {
          width: 154px;
          aspect-ratio: 1;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          padding: 12px;
          border-radius: 50%;
          box-shadow: var(--shadow-md);
        }
        .inside {
          width: 100%;
          height: 100%;
          display: grid;
          place-content: center;
          text-align: center;
          border-radius: 50%;
          background: white;
        }
        strong { font-size: 1.8rem; color: var(--green-950); }
        span { color: var(--ink-700); font-size: .76rem; }
      `}</style>
    </div>
  );
}
