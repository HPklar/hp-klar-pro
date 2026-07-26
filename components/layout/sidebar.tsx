"use client";

type Page = "dashboard" | "atlas";

const items: Array<[string, string, Page | null]> = [
  ["⌂", "Dashboard", "dashboard"],
  ["▤", "Akademie", "atlas"],
  ["☆", "Favoriten", null],
  ["↻", "Wiederholen", null],
  ["↗", "Fortschritt", null],
  ["▣", "Prüfung", null]
];

export function Sidebar({
  active,
  onNavigate,
}: {
  active: Page;
  onNavigate: (page: Page) => void;
}) {
  return (
    <aside className="sidebar">
      <button className="brand" onClick={() => onNavigate("dashboard")} aria-label="Zur Startseite">
        <img src="/hp-klar-logo.svg" alt="" />
        <div>
          <strong>HP Klar Pro</strong>
          <span>Die Heilpraktiker-Akademie</span>
        </div>
      </button>

      <nav>
        {items.map(([icon, label, target]) => (
          <button
            key={label}
            className={target === active ? "active" : ""}
            onClick={() => target && onNavigate(target)}
          >
            <span className="icon">{icon}</span>
            <span className="label">{label}</span>
          </button>
        ))}
      </nav>

      <div className="exam">
        <span>Prüfung</span>
        <strong>März 2027</strong>
        <small>Dein Lernplan ist aktiv</small>
      </div>

      <style jsx>{`
        .sidebar {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
          gap: 30px;
          padding: 22px 16px;
          border-right: 1px solid rgba(29,81,63,.10);
          background: rgba(255,255,255,.76);
          backdrop-filter: blur(22px);
          z-index: 20;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 7px;
          border: 0;
          background: transparent;
          text-align: left;
          cursor: pointer;
        }
        .brand img { width: 50px; height: 50px; }
        .brand div { display: grid; line-height: 1.08; }
        .brand strong { color: var(--green-950); font-size: 1.05rem; }
        .brand span { margin-top: 5px; color: var(--ink-500); font-size: .68rem; }
        nav { display: grid; gap: 6px; }
        nav button {
          min-height: 46px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 13px;
          border: 0;
          border-radius: 14px;
          color: var(--ink-700);
          background: transparent;
          font-weight: 680;
          cursor: pointer;
          text-align: left;
        }
        nav button:hover, nav button.active {
          color: var(--green-950);
          background: var(--green-100);
        }
        .icon { width: 24px; text-align: center; font-size: 1.16rem; }
        .exam {
          margin-top: auto;
          display: grid;
          gap: 4px;
          padding: 15px;
          border-radius: var(--radius-md);
          color: white;
          background: var(--green-950);
        }
        .exam span, .exam small { opacity: .72; }
        .exam span { font-size: .7rem; text-transform: uppercase; letter-spacing: .08em; }
        @media (max-width: 1020px) {
          .brand div, .label, .exam { display: none; }
          .sidebar { align-items: center; padding-inline: 12px; }
          .brand { padding: 0; }
          nav button { width: 52px; justify-content: center; padding: 0; }
        }
        @media (max-width: 760px) {
          .sidebar {
            position: fixed;
            inset: auto 0 0 0;
            width: 100%;
            height: 78px;
            flex-direction: row;
            justify-content: center;
            padding: 10px 8px;
            border-top: 1px solid var(--line);
            border-right: 0;
          }
          .brand, .exam { display: none; }
          nav { width: 100%; display: flex; justify-content: space-around; }
          nav button { width: 44px; min-height: 44px; }
          nav button:nth-child(n+6) { display: none; }
        }
      `}</style>
    </aside>
  );
}
