import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function DashboardHome({ onOpenAtlas }: { onOpenAtlas: () => void }) {
  return (
    <>
      <section className="hero">
        <div>
          <div className="kicker">Willkommen zurück, Sina</div>
          <h1>Heute wird Zellbiologie klar.</h1>
          <p className="muted">
            Dein nächster Lernschritt: Organellen sicher erkennen, Funktionen verstehen und typische Prüfungsfallen vermeiden.
          </p>
          <div className="actions">
            <Button onClick={onOpenAtlas}>Weiterlernen</Button>
            <Button variant="secondary">Lernplan ansehen</Button>
          </div>
        </div>

        <div className="progressCard">
          <span>Lernfortschritt</span>
          <strong>78%</strong>
          <small>Diese Woche +12 %</small>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <div className="kicker">Heute</div>
            <h2>Deine Lernübersicht</h2>
          </div>
          <Badge variant="soft">6 Tage Lernserie</Badge>
        </div>

        <div className="grid grid-4">
          <MiniStat icon="🧬" title="Zellaufbau" value="82 %" note="Kapitel-Fortschritt" />
          <MiniStat icon="🧠" title="Wiederholen" value="14" note="heute fällig" />
          <MiniStat icon="🎯" title="Quizquote" value="76 %" note="letzte 30 Fragen" />
          <MiniStat icon="🎓" title="Prüfung" value="März 2027" note="Lernplan aktiv" />
        </div>
      </section>

      <section className="section grid grid-2">
        <Card>
          <div className="kicker">Weiterlernen</div>
          <h2>Die menschliche Zelle</h2>
          <p className="muted lessonText">
            Zellkern, Mitochondrien, ER, Golgi-Apparat und Zellmembran – visuell, interaktiv und prüfungsnah.
          </p>
          <div className="progressTrack"><span /></div>
          <div className="lessonFooter">
            <small>82 % abgeschlossen</small>
            <Button onClick={onOpenAtlas}>Atlas öffnen</Button>
          </div>
        </Card>

        <Card>
          <div className="kicker">Empfohlen</div>
          <h2>Deine nächsten drei Schritte</h2>
          <div className="recommendations">
            <Recommendation number="01" title="Mitochondrium wiederholen" text="ATP, Cristae und mtDNA" />
            <Recommendation number="02" title="Membrantransport üben" text="Diffusion, Osmose und aktiver Transport" />
            <Recommendation number="03" title="10 Prüfungsfragen" text="Schwierigkeit: mittel" />
          </div>
        </Card>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <div className="kicker">Akademie</div>
            <h2>Fachgebiete</h2>
          </div>
        </div>
        <div className="grid grid-3">
          <ModuleCard title="Zellaufbau" icon="🧬" status="Aktiv" />
          <ModuleCard title="Allgemeine Pathologie" icon="🩺" status="Als Nächstes" />
          <ModuleCard title="Blut" icon="🩸" status="Vorbereitet" />
        </div>
      </section>

      <style jsx>{`
        .hero {
          min-height: 300px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
          padding: 42px;
          border: 1px solid var(--line);
          border-radius: var(--radius-xl);
          background:
            radial-gradient(circle at 88% 22%, rgba(191,208,197,.6), transparent 16rem),
            linear-gradient(135deg, #fff, #f2f6f1);
          box-shadow: var(--shadow-sm);
        }
        .hero h1 {
          max-width: 760px;
          margin-bottom: 14px;
          font-size: clamp(2.25rem, 5vw, 4.35rem);
          line-height: 1.01;
        }
        .hero p { max-width: 700px; font-size: 1.06rem; }
        .actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
        .progressCard {
          width: 180px;
          aspect-ratio: 1;
          flex: 0 0 auto;
          display: grid;
          place-content: center;
          text-align: center;
          border: 12px solid var(--green-100);
          border-top-color: var(--green-900);
          border-right-color: var(--green-900);
          border-radius: 50%;
          background: white;
          box-shadow: var(--shadow-md);
        }
        .progressCard span, .progressCard small { color: var(--ink-700); }
        .progressCard strong { display: block; color: var(--green-950); font-size: 2.1rem; }
        .lessonText { margin-top: 10px; }
        .progressTrack {
          height: 10px;
          overflow: hidden;
          margin-top: 22px;
          border-radius: 999px;
          background: var(--green-100);
        }
        .progressTrack span {
          display: block;
          width: 82%;
          height: 100%;
          background: linear-gradient(90deg, var(--green-900), var(--sage-500));
        }
        .lessonFooter {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: 18px;
        }
        .recommendations { display: grid; gap: 12px; margin-top: 16px; }
        @media (max-width: 760px) {
          .hero { padding: 27px; }
          .progressCard { display: none; }
        }
      `}</style>
    </>
  );
}

function MiniStat({ icon, title, value, note }: { icon: string; title: string; value: string; note: string }) {
  return (
    <Card>
      <div className="miniStatIcon">{icon}</div>
      <span className="miniStatTitle">{title}</span>
      <strong className="miniStatValue">{value}</strong>
      <small className="muted">{note}</small>
      <style jsx>{`
        .miniStatIcon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          margin-bottom: 13px;
          border-radius: 14px;
          background: var(--green-100);
        }
        .miniStatTitle { display: block; color: var(--ink-700); font-size: .82rem; font-weight: 750; }
        .miniStatValue { display: block; margin: 4px 0; color: var(--green-950); font-size: 1.55rem; }
      `}</style>
    </Card>
  );
}

function Recommendation({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="recommendation">
      <span>{number}</span>
      <div><strong>{title}</strong><small>{text}</small></div>
      <i>›</i>
      <style jsx>{`
        .recommendation {
          display: grid;
          grid-template-columns: 42px 1fr 20px;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 16px;
          background: var(--cream-50);
        }
        .recommendation > span {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          color: var(--green-900);
          background: var(--green-100);
          font-weight: 850;
        }
        .recommendation div { display: grid; }
        .recommendation small { color: var(--ink-700); }
        .recommendation i { color: var(--ink-500); font-style: normal; }
      `}</style>
    </div>
  );
}

function ModuleCard({ title, icon, status }: { title: string; icon: string; status: string }) {
  return (
    <Card>
      <div className="moduleIcon">{icon}</div>
      <h3>{title}</h3>
      <span>{status}</span>
      <style jsx>{`
        .moduleIcon {
          width: 54px;
          height: 54px;
          display: grid;
          place-items: center;
          margin-bottom: 18px;
          border-radius: 18px;
          background: var(--green-100);
          font-size: 1.45rem;
        }
        h3 { margin-bottom: 7px; }
        span { color: var(--green-700); font-size: .82rem; font-weight: 760; }
      `}</style>
    </Card>
  );
}
