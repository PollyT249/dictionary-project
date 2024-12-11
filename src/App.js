import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Polina Tretiakova and{" "}
            <a
              href="https://github.com/PollyT249/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              open-sources on GitHub.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
