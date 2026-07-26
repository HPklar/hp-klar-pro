"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

const organelles = [
  { name: "Zellkern", x: 38, y: 44, text: "Enthält den größten Teil der Erbinformation und steuert zentrale Zellvorgänge." },
  { name: "Mitochondrium", x: 62, y: 38, text: "Ort der Zellatmung und der überwiegenden ATP-Produktion." },
  { name: "Golgi-Apparat", x: 70, y: 62, text: "Modifiziert, sortiert und verpackt Proteine und Lipide." },
  { name: "Raues ER", x: 45, y: 67, text: "Synthese und erste Verarbeitung vieler Membran- und Exportproteine." },
];

export function AnatomyViewer() {
  const [mode, setMode] = useState<"lernen" | "entdecken" | "pruefung">("lernen");
  const [selected, setSelected] = useState(organelles[0]);

  return (
    <div className="viewer">
      <div className="toolbar">
        <div>
          <Badge variant="soft">Tierische Zelle</Badge>
          <h3>Zellatlas</h3>
        </div>
        <div className="modes">
          <Button variant={mode === "lernen" ? "primary" : "secondary"} onClick={() => setMode("lernen")}>Lernen</Button>
          <Button variant={mode === "entdecken" ? "primary" : "secondary"} onClick={() => setMode("entdecken")}>Entdecken</Button>
          <Button variant={mode === "pruefung" ? "primary" : "secondary"} onClick={() => setMode("pruefung")}>Prüfung</Button>
        </div>
      </div>

      <div className="body">
        <div className="image">
          <img src="/cell-atlas-preview.png" alt="Illustration einer tierischen Zelle" />
          {organelles.map((item) => (
            <button
              key={item.name}
              className={selected.name === item.name ? "hotspot active" : "hotspot"}
              style={{ left: `${item.x}%`, top: `${item.y}%` }}
              onClick={() => setSelected(item)}
              aria-label={item.name}
            >
              <span />
              {mode === "lernen" && <b>{item.name}</b>}
              {mode === "entdecken" && selected.name === item.name && <b>{item.name}</b>}
            </button>
          ))}
        </div>

        <aside>
          <div className="hp-kicker">{mode === "pruefung" ? "Selbsttest" : "Ausgewählte Struktur"}</div>
          <h3>{mode === "pruefung" ? "Welche Struktur ist markiert?" : selected.name}</h3>
          <p>
            {mode === "pruefung"
              ? "Tippe auf eine Markierung und benenne die Struktur, bevor du die Lösung öffnest."
              : selected.text}
          </p>
          <div className="fact">
            <span>Prüfungsrelevanz</span>
            <strong>hoch</strong>
          </div>
          <div className="fact">
            <span>Kapitel</span>
            <strong>Zellaufbau</strong>
          </div>
          <Button variant="secondary">
            {mode === "pruefung" ? "Lösung anzeigen" : "Lektion öffnen"}
          </Button>
        </aside>
      </div>

      <style jsx>{`
        .viewer {
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: var(--radius-xl);
          background: white;
          box-shadow: var(--shadow-sm);
        }
        .toolbar {
          min-height: 86px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          padding: 18px 22px;
          border-bottom: 1px solid var(--line);
        }
        .toolbar h3 { margin: 7px 0 0; }
        .modes { display: flex; flex-wrap: wrap; gap: 8px; }
        .body { display: grid; grid-template-columns: minmax(0, 1.5fr) minmax(280px, .55fr); }
        .image {
          position: relative;
          min-height: 560px;
          display: grid;
          place-items: center;
          overflow: hidden;
          background:
            linear-gradient(rgba(255,255,255,.82), rgba(255,255,255,.82)),
            radial-gradient(circle, var(--sage-300) 1px, transparent 1px);
          background-size: auto, 22px 22px;
        }
        .image img {
          width: min(720px, 96%);
          height: auto;
          mix-blend-mode: multiply;
        }
        .hotspot {
          position: absolute;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          gap: 7px;
          border: 0;
          background: transparent;
          cursor: pointer;
        }
        .hotspot span {
          width: 18px;
          height: 18px;
          border: 5px solid white;
          border-radius: 50%;
          background: var(--copper-600);
          box-shadow: 0 0 0 2px var(--copper-600), var(--shadow-sm);
        }
        .hotspot.active span { background: var(--green-900); box-shadow: 0 0 0 2px var(--green-900), var(--shadow-sm); }
        .hotspot b {
          padding: 5px 9px;
          border-radius: 9px;
          color: var(--green-950);
          background: rgba(255,255,255,.92);
          box-shadow: var(--shadow-sm);
          white-space: nowrap;
          font-size: .74rem;
        }
        aside {
          padding: 30px;
          border-left: 1px solid var(--line);
          background: var(--cream-50);
        }
        aside h3 { margin-bottom: 10px; font-size: 1.65rem; }
        aside p { color: var(--ink-700); }
        .fact {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding: 13px 0;
          border-top: 1px solid var(--line);
          font-size: .84rem;
        }
        .fact span { color: var(--ink-700); }
        aside :global(button) { width: 100%; margin-top: 18px; }
        @media (max-width: 900px) {
          .body { grid-template-columns: 1fr; }
          aside { border-left: 0; border-top: 1px solid var(--line); }
          .image { min-height: 440px; }
        }
        @media (max-width: 620px) {
          .toolbar { align-items: flex-start; flex-direction: column; }
          .image { min-height: 340px; }
          .hotspot b { display: none; }
        }
      `}</style>
    </div>
  );
}
