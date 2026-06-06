import { GreetForm } from "../../../greet";
import { v1Highlights } from "../../data/v1Highlights";

function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <div className="hero-copy">
          <p className="eyebrow">CIITM Desktop v1</p>
          <h1>Production-ready folder structure, organized feature first.</h1>
          <p className="lede">
            The app shell now separates concerns into app, features, and shared layers so the codebase can grow without
            turning into a flat component pile.
          </p>
        </div>

        <div className="hero-panel">
          <p className="panel-label">Structure snapshot</p>
          <ul className="structure-list">
            {v1Highlights.map((highlight) => (
              <li key={highlight.title}>
                <strong>{highlight.title}</strong>
                <span>{highlight.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-grid">
        <div className="content-card">
          <p className="panel-label">Feature example</p>
          <h2>Rust command integration lives in a feature slice.</h2>
          <p>
            The greeting form stays isolated in <span>features/greet</span>, so future user workflows can follow the same pattern.
          </p>
          <GreetForm />
        </div>

        <div className="content-card muted-card">
          <p className="panel-label">Recommended v1 map</p>
          <pre>{`src/
  app/
  features/
  shared/
  assets/`}</pre>
          <p>
            Add future screens as feature folders, keep reusable primitives in shared, and let app own composition only.
          </p>
        </div>
      </section>
    </main>
  );
}

export { HomePage };