import { Button } from "@/components/ui/button";

export function Topbar({ onOpenAtlas }: { onOpenAtlas: () => void }) {
  return (
    <header className="topbar">
      <label>
        <span>⌕</span>
        <input aria-label="Suche" placeholder="Suche in allen Inhalten …" />
      </label>
      <div className="actions">
        <Button variant="secondary" onClick={onOpenAtlas}>Zellatlas öffnen</Button>
        <button className="iconButton" aria-label="Darstellung wechseln">☾</button>
        <button className="avatar" aria-label="Profil">S</button>
      </div>
      <style jsx>{`
        .topbar {
          width: min(1240px, 100%);
          min-height: 88px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          margin: 0 auto;
        }
        label {
          width: min(520px, 52vw);
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 0 14px;
          border: 1px solid var(--line);
          border-radius: 15px;
          background: rgba(255,255,255,.82);
          box-shadow: var(--shadow-sm);
        }
        input {
          width: 100%;
          height: 44px;
          border: 0;
          outline: 0;
          background: transparent;
        }
        .actions { display: flex; align-items: center; gap: 9px; }
        .iconButton, .avatar {
          width: 44px;
          height: 44px;
          border: 1px solid var(--line);
          border-radius: 14px;
          background: white;
          cursor: pointer;
        }
        .avatar { color: white; background: var(--green-900); border-color: var(--green-900); }
        @media (max-width: 760px) {
          label { width: 44px; padding: 0; justify-content: center; }
          input, .actions :global(.button) { display: none; }
        }
      `}</style>
    </header>
  );
}
