export function Topbar({ title }: { title: string }) {
  return (
    <header className="topbar">
      <div>
        <span className="eyebrow">HP Klar Pro</span>
        <strong>{title}</strong>
      </div>
      <div className="actions">
        <label>
          <span>⌕</span>
          <input aria-label="Suche" placeholder="In HP Klar suchen …" />
        </label>
        <button aria-label="Benachrichtigungen">♢</button>
        <button className="avatar" aria-label="Profil">S</button>
      </div>
      <style jsx>{`
        .topbar {
          width: min(1180px, 100%);
          min-height: 82px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          margin: 0 auto;
        }
        .topbar > div:first-child { display: grid; line-height: 1.05; }
        .eyebrow {
          color: var(--ink-500);
          font-size: .68rem;
          font-weight: 800;
          letter-spacing: .08em;
          text-transform: uppercase;
        }
        strong { color: var(--green-950); font-size: 1.08rem; margin-top: 4px; }
        .actions { display: flex; align-items: center; gap: 9px; }
        label {
          min-width: 300px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0 13px;
          border: 1px solid var(--line);
          border-radius: 14px;
          background: rgba(255,255,255,.8);
        }
        input {
          width: 100%;
          height: 42px;
          border: 0;
          outline: 0;
          background: transparent;
        }
        button {
          width: 42px;
          height: 42px;
          border: 1px solid var(--line);
          border-radius: 14px;
          background: white;
          cursor: pointer;
        }
        .avatar { color: white; background: var(--green-900); border-color: var(--green-900); }
        @media (max-width: 760px) {
          label { min-width: 0; width: 44px; }
          input { display: none; }
          .topbar > div:first-child { max-width: 170px; }
        }
      `}</style>
    </header>
  );
}
