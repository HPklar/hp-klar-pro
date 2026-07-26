type State = "idle" | "correct" | "wrong";

export function QuizOption({
  label,
  text,
  state = "idle",
  onClick,
}: {
  label: string;
  text: string;
  state?: State;
  onClick?: () => void;
}) {
  return (
    <button className={`option ${state}`} onClick={onClick}>
      <span>{label}</span>
      <strong>{text}</strong>
      <i>{state === "correct" ? "✓" : state === "wrong" ? "×" : "›"}</i>
      <style jsx>{`
        .option {
          width: 100%;
          min-height: 58px;
          display: grid;
          grid-template-columns: 36px 1fr 26px;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          text-align: left;
          border: 1px solid var(--line);
          border-radius: var(--radius-md);
          color: var(--ink-950);
          background: white;
          cursor: pointer;
          transition: border-color 160ms ease, transform 160ms ease, background 160ms ease;
        }
        .option:hover { transform: translateY(-1px); border-color: var(--green-200); }
        .option span {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border-radius: 11px;
          color: var(--green-950);
          background: var(--green-100);
          font-weight: 850;
        }
        .option strong { font-size: .92rem; }
        .option i { text-align: center; font-style: normal; }
        .correct { border-color: var(--sage-500); background: var(--sage-100); }
        .wrong { border-color: #d99b9e; background: var(--red-100); }
      `}</style>
    </button>
  );
}
