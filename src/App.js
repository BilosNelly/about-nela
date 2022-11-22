import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="my-web">
      <header className="my-web__header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>Software developer with the crazy shiba inu!</span>
        <span>Meet me, Bilos Antonela</span>
      </header>
    </div>
  );
}

export default App;
