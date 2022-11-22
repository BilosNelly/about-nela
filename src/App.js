import shiba from "./shiba.svg";
import avatar from "./avatar.svg";
import "./App.scss";
import { Container } from "./components";

function App() {
  return (
    <div className="my-web">
      <div className="my-web__header">
        <span>Software developer with the crazy shiba inu!</span>
        <span>Meet me, Bilos Antonela</span>
      </div>

      <div className="my-web__content">
        <Container
          img={shiba}
          title={"Meet Tokyo"}
          text={
            "Here will be text about Tokyo Here will be text about Tokyo Here will be text about Toky Here will be text about Toky Here will be text about Toky"
          }
        />

        <Container
          img={avatar}
          title={"Meet Tokyo"}
          text={
            "Here will be text about Tokyo Here will be text about Tokyo Here will be text about Toky Here will be text about Toky Here will be text about Toky"
          }
        />

        <Container
          img={shiba}
          title={"Meet Tokyo"}
          text={
            "Here will be text about Tokyo Here will be text about Tokyo Here will be text about Toky Here will be text about Toky Here will be text about Toky"
          }
        />

        <Container
          img={shiba}
          title={"Meet Tokyo"}
          text={
            "Here will be text about Tokyo Here will be text about Tokyo Here will be text about Toky Here will be text about Toky Here will be text about Toky"
          }
        />

        <Container
          img={shiba}
          title={"Meet Tokyo"}
          text={
            "Here will be text about Tokyo Here will be text about Tokyo Here will be text about Toky Here will be text about Toky Here will be text about Toky"
          }
        />
      </div>
    </div>
  );
}

export default App;
