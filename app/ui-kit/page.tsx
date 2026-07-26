"use client";

import { useState } from "react";
import { Sidebar } from "../../components/layout/sidebar";
import { Topbar } from "../../components/layout/topbar";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Card } from "../../components/ui/card";
import { ProgressBar, ProgressRing } from "../../components/ui/progress";
import { LearningCallout } from "../../components/learning/learning-callout";
import { QuizOption } from "../../components/learning/quiz-option";
import { StatCard } from "../../components/learning/stat-card";
import { AnatomyViewer } from "../../components/learning/anatomy-viewer";

export default function UIKitPage() {
  const [quiz, setQuiz] = useState<"idle" | "correct" | "wrong">("idle");

  return (
    <div className="hp-shell">
      <Sidebar active="UI Kit" />
      <main className="hp-main">
        <Topbar title="UI Kit 1.0" />

        <div className="hp-content">
          <section className="hero">
            <div>
              <div className="hp-kicker">HP Klar Design System</div>
              <h1>Ruhig, medizinisch und konsequent lernorientiert.</h1>
              <p className="hp-muted">
                Die verbindliche Komponentenbibliothek für Dashboard, Akademie,
                Atlas, Quiz, Patientenfälle und Prüfungssimulation.
              </p>
              <div className="heroActions">
                <Button>Komponente verwenden</Button>
                <Button variant="secondary">Dokumentation</Button>
              </div>
            </div>
            <ProgressRing value={82} label="Zellaufbau" />
          </section>

          <section className="hp-section">
            <div className="hp-section-title">
              <div>
                <div className="hp-kicker">Übersicht</div>
                <h2>Dashboard-Komponenten</h2>
              </div>
              <Badge>UI Kit 1.0</Badge>
            </div>

            <div className="hp-grid hp-grid-4">
              <StatCard icon="🧬" label="Lernfortschritt" value="82 %" detail="+12 % diese Woche" />
              <StatCard icon="🧠" label="Wiederholungen" value="14" detail="heute fällig" />
              <StatCard icon="🔥" label="Lernserie" value="6 Tage" detail="persönlicher Rekord: 12" />
              <StatCard icon="🎓" label="Prüfung" value="März 2027" detail="Lernplan aktiv" />
            </div>
          </section>

          <section className="hp-section">
            <div className="hp-section-title">
              <div>
                <div className="hp-kicker">Atlas</div>
                <h2>Interaktiver Anatomie-Viewer</h2>
              </div>
            </div>
            <AnatomyViewer />
          </section>

          <section className="hp-section">
            <div className="hp-section-title">
              <div>
                <div className="hp-kicker">Lernkarten</div>
                <h2>Didaktische Hervorhebungen</h2>
              </div>
            </div>
            <div className="hp-grid hp-grid-3">
              <LearningCallout
                type="memory"
                title="Merksatz"
                text="Mitochondrien sind die Kraftwerke der Zelle und besitzen eine eigene DNA."
              />
              <LearningCallout
                type="redflag"
                title="Red Flag"
                text="Akute neurologische Ausfälle sind kein Fall für eine naturheilkundliche Selbstbehandlung."
              />
              <LearningCallout
                type="nature"
                title="Naturheilkundliche Begleitung"
                text="Unterstützende Maßnahmen werden klar von evidenzbasierter Therapie und Notfallversorgung getrennt."
              />
            </div>
          </section>

          <section className="hp-section">
            <div className="hp-section-title">
              <div>
                <div className="hp-kicker">Quiz Engine</div>
                <h2>Antwortkarten mit Lernfeedback</h2>
              </div>
            </div>

            <Card className="quizCard">
              <Badge variant="soft">Prüfungsfrage · mittel</Badge>
              <h3>Welches Organell ist hauptsächlich für die ATP-Produktion zuständig?</h3>
              <div className="quizOptions">
                <QuizOption
                  label="A"
                  text="Golgi-Apparat"
                  state={quiz === "wrong" ? "wrong" : "idle"}
                  onClick={() => setQuiz("wrong")}
                />
                <QuizOption
                  label="B"
                  text="Mitochondrium"
                  state={quiz === "correct" ? "correct" : "idle"}
                  onClick={() => setQuiz("correct")}
                />
                <QuizOption label="C" text="Lysosom" />
                <QuizOption label="D" text="Zentriol" />
              </div>

              {quiz !== "idle" && (
                <div className={quiz === "correct" ? "feedback correct" : "feedback wrong"}>
                  <strong>{quiz === "correct" ? "Richtig." : "Noch nicht."}</strong>
                  <span>
                    Mitochondrien erzeugen den größten Teil des ATP durch oxidative
                    Phosphorylierung. Der Golgi-Apparat modifiziert und sortiert Proteine.
                  </span>
                </div>
              )}
            </Card>
          </section>

          <section className="hp-section">
            <div className="hp-section-title">
              <div>
                <div className="hp-kicker">Grundelemente</div>
                <h2>Buttons, Badges und Fortschritt</h2>
              </div>
            </div>

            <Card>
              <div className="elementRow">
                <Button>Primär</Button>
                <Button variant="secondary">Sekundär</Button>
                <Button variant="ghost">Textaktion</Button>
                <Button variant="danger">Abbrechen</Button>
              </div>
              <div className="elementRow">
                <Badge>Aktiv</Badge>
                <Badge variant="soft">Grundlagen</Badge>
                <Badge variant="warning">Prüfungsrelevant</Badge>
                <Badge variant="danger">Red Flag</Badge>
              </div>
              <div className="progressDemo">
                <div>
                  <strong>Zellaufbau</strong>
                  <span className="hp-muted"> 82 % abgeschlossen</span>
                </div>
                <ProgressBar value={82} />
              </div>
            </Card>
          </section>
        </div>
      </main>

      <style jsx>{`
        .hero {
          margin-top: 18px;
          min-height: 250px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 28px;
          padding: 38px;
          border: 1px solid var(--line);
          border-radius: var(--radius-xl);
          background:
            radial-gradient(circle at 92% 15%, rgba(189,208,196,.55), transparent 15rem),
            linear-gradient(135deg, #fff, #f4f7f2);
          box-shadow: var(--shadow-sm);
        }
        .hero h1 {
          max-width: 760px;
          margin-bottom: 14px;
          font-size: clamp(2rem, 5vw, 4rem);
          line-height: 1.02;
        }
        .hero p {
          max-width: 700px;
          font-size: 1.06rem;
        }
        .heroActions, .elementRow {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 22px;
        }
        .quizCard h3 {
          max-width: 760px;
          margin: 18px 0;
          font-size: 1.4rem;
        }
        .quizOptions {
          display: grid;
          gap: 12px;
        }
        .feedback {
          display: grid;
          gap: 4px;
          margin-top: 18px;
          padding: 16px;
          border-radius: var(--radius-md);
        }
        .feedback.correct { background: var(--sage-100); color: var(--green-950); }
        .feedback.wrong { background: var(--red-100); color: var(--red-700); }
        .progressDemo {
          margin-top: 26px;
          max-width: 600px;
        }
        @media (max-width: 760px) {
          .hero { padding: 25px; align-items: flex-start; }
          .hero :global(.progress-ring) { display: none; }
        }
      `}</style>
    </div>
  );
}
