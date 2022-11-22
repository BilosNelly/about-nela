import { dogo, avatar, tennis, world } from "./assets";
import "./App.scss";
import { Container } from "./components";

function App() {
  return (
    <div className="my-web">
      <div className="my-web__header">
        <span>Software developer with the crazy shiba inu!</span>
        <span className="typewriter">Hello! I am Antonela, thanks for being here!</span>
      </div>

      <div className="my-web__content">
        <Container
          img={avatar}
          title={"Antonela"}
          text={
            "Software developer, full-stack but web oriented. Bachelor in computer science and world citizen since 1996."
          }
        />

        <Container
          img={dogo}
          title={"Tokyo"}
          text={
            "Shiba inu. Crazy dog. Demon since 2021. FYI: 2 Important facts about Tokyo: He is older than the Eleon Musk\'s Shiba & was not named after La casa de papel."
          }
        />

        <Container
          img={world}
          title={"Where now?"}
          text={
            "One of my biggest hobbies is traveling. I love to wander around, explore new places, meet new cultures and get out of my comfort zone."
          }
        />

        <Container
          img={tennis}
          title={"Meet Tokyo"}
          text={
            "It is unusual to have an IT company without a ping-pong table. That's how it all started... exhibitioner since 2017."
          }
        />
      </div>

      <div className="my-web__about">
        <span className="my-web__about__title">About beginnings in IT...</span>
        <span className="my-web__about__text">Enrolled in college around 2014, studied a little, socialized a bit more, and in second year of college sent an application and resume to an Istrian company, Infobip.</span>
        <span className="my-web__about__text">I started working as an intern on web projects using React, Javascript, Typescript, NodeJS and later advanced to further positions.</span>
      </div>





    </div>
  );
}

export default App;
