const items = [
  ["⌂", "Dashboard"],
  ["▤", "Akademie"],
  ["☆", "Favoriten"],
  ["↻", "Wiederholen"],
  ["↗", "Fortschritt"],
  ["▣", "Prüfung"],
  ["◈", "UI Kit"],
];

export function Sidebar({ active = "Dashboard" }: { active?: string }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="logo">♡</div>
        <div>
          <strong>HP Klar</strong>
          <span>Pro</span>
        </div>
      </div>

      <nav>
        {items.map(([icon, label]) => (
          <a key={label} className={label === active ? "active" : ""} href="#">
            <span className="icon">{icon}</span>
            <span className="label">{label}</span>
          </a>
        ))}
      </nav>

      <div className="course">
        <span>Aktueller Kurs</span>
        <strong>Zellaufbau</strong>
        <small>82 % abgeschlossen</small>
      </div>

      <style jsx>{`
        .sidebar {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
          gap: 28px;
          padding: 24px 16px;
          border-right: 1px solid rgba(33,84,63,.10);
          background: rgba(255,255,255,.72);
          backdrop-filter: blur(20px);
          z-index: 10;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 0 8px;
          color: var(--green-950);
        }
        .logo {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          color: white;
          background: var(--green-900);
          font-size: 1.4rem;
        }
        .brand div:last-child { display: grid; line-height: 1.05; }
        .brand strong { font-family: "Plus Jakarta Sans", sans-serif; }
        .brand span { color: var(--ink-500); font-size: .72rem; margin-top: 4px; }
        nav { display: grid; gap: 6px; }
        nav a {
          display: flex;
          align-items: center;
          gap: 12px;
          min-height: 46px;
          padding: 0 13px;
          border-radius: 14px;
          color: var(--ink-700);
          font-weight: 680;
        }
        nav a:hover, nav a.active {
          color: var(--green-950);
          background: var(--green-100);
        }
        .icon { width: 24px; text-align: center; font-size: 1.15rem; }
        .course {
          margin-top: auto;
          display: grid;
          gap: 4px;
          padding: 15px;
          border-radius: var(--radius-md);
          background: var(--green-950);
          color: white;
        }
        .course span, .course small { opacity: .72; }
        .course span { font-size: .7rem; text-transform: uppercase; letter-spacing: .08em; }
        @media (max-width: 980px) {
          .brand div:last-child, .label, .course { display: none; }
          .sidebar { align-items: center; padding-inline: 12px; }
          nav a { justify-content: center; width: 52px; padding: 0; }
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
          .brand, .course { display: none; }
          nav { width: 100%; display: flex; justify-content: space-around; }
          nav a { width: 44px; min-height: 44px; }
          nav a:nth-child(n+6) { display: none; }
        }
      `}</style>
    </aside>
  );
}
