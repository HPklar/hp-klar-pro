type Type = "memory" | "redflag" | "nature";

const map = {
  memory: { icon: "✦", cls: "memory" },
  redflag: { icon: "!", cls: "redflag" },
  nature: { icon: "⌁", cls: "nature" },
};

export function LearningCallout({
  type,
  title,
  text,
}: {
  type: Type;
  title: string;
  text: string;
}) {
  const item = map[type];
  return (
    <article className={`callout ${item.cls}`}>
      <div className="icon">{item.icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <style jsx>{`
        .callout {
          min-height: 180px;
          display: flex;
          gap: 15px;
          padding: 22px;
          border: 1px solid transparent;
          border-radius: var(--radius-lg);
        }
        .memory { color: var(--yellow-700); background: var(--yellow-100); }
        .redflag { color: var(--red-700); background: var(--red-100); }
        .nature { color: var(--green-950); background: var(--sage-100); }
        .icon {
          width: 40px;
          height: 40px;
          flex: 0 0 auto;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: rgba(255,255,255,.65);
          font-weight: 900;
        }
        h3 { margin-bottom: 7px; font-size: 1.05rem; }
        p { margin: 0; font-size: .9rem; }
      `}</style>
    </article>
  );
}
