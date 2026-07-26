# HP Klar Pro – UI Kit 1.0

Ein direkt einsetzbares UI-Kit für das Next.js-Projekt **HP Klar Pro**.

## Enthalten

- Design Tokens und globale Styles
- Buttons, Karten, Badges und Fortschrittsanzeigen
- Lern-, Merksatz-, Red-Flag- und Naturheilkunde-Karten
- Quiz-Antwortkarten mit Zuständen
- Sidebar und Topbar
- Statistik- und Fortschrittskarten
- Anatomie-Viewer als erste interaktive Demo
- Responsive Darstellung für Desktop, Tablet und Smartphone
- Beispielseite unter `/ui-kit`

## Installation

1. Entpacke den ZIP-Ordner.
2. Kopiere die enthaltenen Ordner `app`, `components` und `public` in dein Projekt.
3. Falls Dateien bereits existieren, sichere sie vorher.
4. Starte lokal mit:

```bash
npm install
npm run dev
```

5. Öffne:

```text
http://localhost:3000/ui-kit
```

## Integration

Die Demo-Seite liegt in:

```text
app/ui-kit/page.tsx
```

Die Komponenten liegen in:

```text
components/ui
components/layout
components/learning
```

Die Farb- und Größenvariablen befinden sich in:

```text
app/globals.css
```

## Hinweis

Das beigefügte Zellbild dient als visuelle Vorschau. Für den endgültigen interaktiven Atlas sollten die Organellen später als einzelne SVG-Flächen umgesetzt werden.
