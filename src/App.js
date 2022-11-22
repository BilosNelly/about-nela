import shiba from "./shiba.svg";
import "./App.scss";

function App() {
  return (
    <div className="my-web">

      <div className="my-web__header">
        <span>Software developer with the crazy shiba inu!</span>
        <span>Meet me, Bilos Antonela</span>
      </div>

      <div className="my-web__header__img">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>here will be img</div>
      </div>

      <div className="my-web__content">
        <div className="my-web__container__wrapper">
          <div className="my-web__container">
            <span className="my-web__container__img">
              <img src={shiba} className="" alt="shiba-inu" />
            </span>
            <span className="my-web__container__title">Meet Tokyo</span>
            <span className="my-web__container__text">Here will be text about Tokyo Here will be text about Tokyo Here will be text about Toky Here will be text about Toky Here will be text about Toky</span>
          </div>
        </div>

        <div className="my-web__container__wrapper">
          <div className="my-web__container">
            <span className="my-web__container__img">
              <img src={shiba} className="" alt="shiba-inu" />
            </span>
            <span className="my-web__container__title">Meet Tokyo</span>
            <span className="my-web__container__text">Here will be text about Tokyo Here will be text about Tokyo Here will be text about Toky Here will be text about Toky Here will be text about Toky</span>
          </div>
        </div>

        <div className="my-web__container__wrapper">
          <div className="my-web__container">
            <span className="my-web__container__img">
              <img src={shiba} className="" alt="shiba-inu" />
            </span>
            <span className="my-web__container__title">Meet Tokyo</span>
            <span className="my-web__container__text">Here will be text about Tokyo Here will be text about Tokyo Here will be text about Toky Here will be text about Toky Here will be text about Toky</span>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
