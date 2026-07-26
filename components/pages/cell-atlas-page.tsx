"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const organelles = [
  {
    name: "Zellkern",
    x: 53,
    y: 38,
    title: "Steuerzentrum der Zelle",
    description: "Der Zellkern enthält den größten Teil der DNA und koordiniert zentrale Prozesse wie Genexpression und Zellteilung."
  },
  {
    name: "Mitochondrium",
    x: 76,
    y: 55,
    title: "Energiegewinnung",
    description: "Mitochondrien erzeugen den größten Teil des ATP durch oxidative Phosphorylierung und besitzen eine eigene DNA."
  },
  {
    name: "Golgi-Apparat",
    x: 35,
    y: 62,
    title: "Sortieren und Verpacken",
    description: "Der Golgi-Apparat modifiziert, sortiert und verpackt Proteine sowie Lipide für ihren weiteren Transport."
  },
  {
    name: "Raues ER",
    x: 38,
    y: 44,
    title: "Proteinsynthese",
    description: "Das raue ER trägt Ribosomen und ist an der Synthese und ersten Verarbeitung vieler Proteine beteiligt."
  }
];

export function CellAtlasPage({ onBack }: { onBack: () => void }) {
  const [mode, setMode] = useState<"lernen" | "entdecken" | "pruefung">("lernen");
  const [selected, setSelected] = useState(organelles[1]);

  return (
    <section className="atlasPage">
      <div className="atlasHeader">
        <div>
          <button className="back" onClick={onBack}>← Dashboard</button>
          <div className="kicker">Zellaufbau · Lektion 1</div>
          <h1>Die tierische Zelle</h1>
          <p className="muted">Organellen erkennen, Funktionen verstehen und Prüfungswissen festigen.</p>
        </div>
        <div className="modeSwitch">
          <Button variant={mode === "lernen" ? "primary" : "secondary"} onClick={() => setMode("lernen")}>Lernen</Button>
          <Button variant={mode === "entdecken" ? "primary" : "secondary"} onClick={() => setMode("entdecken")}>Entdecken</Button>
          <Button variant={mode === "pruefung" ? "primary" : "secondary"} onClick={() => setMode("pruefung")}>Prüfung</Button>
        </div>
      </div>

      <div className="atlasGrid">
        <div className="viewer">
          <img src="/cell-atlas-preview.png" alt="Detaillierte Darstellung einer tierischen Zelle" />
          {organelles.map((organelle) => (
            <button
              key={organelle.name}
              className={selected.name === organelle.name ? "hotspot active" : "hotspot"}
              style={{ left: `${organelle.x}%`, top: `${organelle.y}%` }}
              onClick={() => setSelected(organelle)}
              aria-label={organelle.name}
            >
              <span />
              {mode === "lernen" && <b>{organelle.name}</b>}
              {mode === "entdecken" && selected.name === organelle.name && <b>{organelle.name}</b>}
            </button>
          ))}
        </div>

        <aside>
          <Badge variant="soft">{mode === "pruefung" ? "Selbsttest" : "Ausgewählte Struktur"}</Badge>
          <h2>{mode === "pruefung" ? "Welche Struktur ist markiert?" : selected.name}</h2>
          <h3>{mode === "pruefung" ? "Erst überlegen, dann auflösen." : selected.title}</h3>
          <p className="muted">
            {mode === "pruefung"
              ? "Tippe auf eine Markierung und benenne die Struktur. Danach kannst du die Lösung anzeigen."
              : selected.description}
          </p>

          <div className="facts">
            <div><span>Prüfungsrelevanz</span><strong>hoch</strong></div>
            <div><span>Kapitel</span><strong>Zellaufbau</strong></div>
            <div><span>Lernstatus</span><strong>in Arbeit</strong></div>
          </div>

          <div className="memory">
            <span>✦ Merksatz</span>
            <p>Mitochondrien sind die Kraftwerke der Zelle.</p>
          </div>

          <Button>{mode === "pruefung" ? "Lösung anzeigen" : "Zur Lektion"}</Button>
        </aside>
      </div>

      <div className="tabs">
        <button className="active">Überblick</button>
        <button>Detailansicht</button>
        <button>Prozesse</button>
        <button>Quiz</button>
        <button>Karteikarten</button>
        <button>Patientenfälle</button>
      </div>

      <style jsx>{`
        .atlasPage { padding-bottom: 10px; }
        .atlasHeader {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 20px;
          margin-bottom: 20px;
        }
        .back {
          margin-bottom: 18px;
          padding: 0;
          border: 0;
          color: var(--green-700);
          background: transparent;
          font-weight: 760;
          cursor: pointer;
        }
        .atlasHeader h1 { margin-bottom: 8px; font-size: clamp(2rem, 4vw, 3.5rem); }
        .modeSwitch { display: flex; flex-wrap: wrap; gap: 8px; }
        .atlasGrid {
          overflow: hidden;
          display: grid;
          grid-template-columns: minmax(0, 1.55fr) minmax(300px, .55fr);
          border: 1px solid var(--line);
          border-radius: var(--radius-xl);
          background: white;
          box-shadow: var(--shadow-sm);
        }
        .viewer {
          position: relative;
          min-height: 680px;
          display: grid;
          place-items: center;
          overflow: hidden;
          background:
            linear-gradient(rgba(255,255,255,.80), rgba(255,255,255,.80)),
            radial-gradient(circle, var(--sage-300) 1px, transparent 1px);
          background-size: auto, 22px 22px;
        }
        .viewer img {
          width: min(920px, 98%);
          height: auto;
          mix-blend-mode: multiply;
        }
        .hotspot {
          position: absolute;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          gap: 8px;
          border: 0;
          background: transparent;
          cursor: pointer;
        }
        .hotspot span {
          width: 20px;
          height: 20px;
          border: 5px solid white;
          border-radius: 50%;
          background: var(--copper-600);
          box-shadow: 0 0 0 2px var(--copper-600), var(--shadow-sm);
        }
        .hotspot.active span {
          background: var(--green-900);
          box-shadow: 0 0 0 2px var(--green-900), var(--shadow-sm);
        }
        .hotspot b {
          padding: 6px 10px;
          border-radius: 10px;
          color: var(--green-950);
          background: rgba(255,255,255,.94);
          box-shadow: var(--shadow-sm);
          white-space: nowrap;
          font-size: .78rem;
        }
        aside {
          padding: 30px;
          border-left: 1px solid var(--line);
          background: var(--cream-50);
        }
        aside h2 { margin: 18px 0 4px; font-size: 1.8rem; }
        aside h3 { margin-bottom: 12px; font-size: 1.02rem; }
        .facts { margin: 22px 0; border-top: 1px solid var(--line); }
        .facts div {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding: 13px 0;
          border-bottom: 1px solid var(--line);
          font-size: .84rem;
        }
        .facts span { color: var(--ink-700); }
        .memory {
          margin-bottom: 20px;
          padding: 15px;
          border-radius: 16px;
          color: var(--yellow-700);
          background: var(--yellow-100);
        }
        .memory span { font-weight: 820; }
        .memory p { margin-top: 5px; }
        aside :global(.button) { width: 100%; }
        .tabs {
          display: flex;
          gap: 8px;
          margin-top: 14px;
          padding: 8px;
          overflow-x: auto;
          border: 1px solid var(--line);
          border-radius: 17px;
          background: white;
        }
        .tabs button {
          min-height: 42px;
          padding: 0 14px;
          border: 0;
          border-radius: 12px;
          background: transparent;
          white-space: nowrap;
          cursor: pointer;
        }
        .tabs button.active { color: white; background: var(--green-900); }
        @media (max-width: 980px) {
          .atlasHeader { align-items: flex-start; flex-direction: column; }
          .atlasGrid { grid-template-columns: 1fr; }
          .viewer { min-height: 520px; }
          aside { border-left: 0; border-top: 1px solid var(--line); }
        }
        @media (max-width: 620px) {
          .viewer { min-height: 360px; }
          .hotspot b { display: none; }
        }
      `}</style>
    </section>
  );
}
