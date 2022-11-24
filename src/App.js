import "./App.scss";
import {
  ajax,
  avatar,
  dogo,
  hooks,
  javascript,
  jsadvanced,
  jsbasics,
  tennis,
  webpack,
  world,
} from "./assets";
import { Chip, Container, Course } from "./components";

function App() {
  return (
    <div className="my-web">
      <div className="my-web__header">
        <span>Software developer with the crazy shiba inu!</span>
        <span className="typewriter">
          Hello! I am Antonela, thanks for being here!
        </span>
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
            "Shiba inu. Crazy dog. Demon since 2021. FYI: 2 Important facts about Tokyo: He is older than the Elon Musk's Shiba & was not named after La casa de papel."
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
          title={"Ping Pong"}
          text={
            "It is unusual to have an IT company without a ping-pong table. That's how it all started... exhibitioner since 2017."
          }
        />
      </div>

      <div className="my-web__about">
        <span className="my-web__about__title">About beginnings in IT...</span>
        <span className="my-web__about__text">
          Enrolled in college around 2014, studied a little, socialized a bit
          more, and in second year of college sent an application and resume to
          an Istrian company, Infobip.
        </span>
        <span className="my-web__about__text">
          I started working as an intern on web projects using React,
          Javascript, Typescript, NodeJS and later advanced to further
          positions.
        </span>
      </div>

      <div className="my-web__skills__wrapper">
        <div className="my-web__skills">
          <span className="my-web__about__title">
            Some of the tools I learned to work with at Infobip..
          </span>

          {/* This should be a list of Chips */}
          <div className="my-web__skills__item__wrapper">
            <Chip name={"React"} />
            <Chip name={"Typescript"} />
            <Chip name={"Javascript"} />
            <Chip name={"NodeJS"} />
            <Chip name={"GraphQl"} />
            <Chip name={"CSS"} />
            <Chip name={"Less"} />
            <Chip name={"Sass"} />
            <Chip name={"Git"} />
            <Chip name={"Github"} />
            <Chip name={"Webpack"} />
            <Chip name={"Scrum"} />
            <Chip name={"Jira"} />
            <Chip name={"Confluence"} />
            <Chip name={"Linux"} />
          </div>

          <span className="my-web__about__title align-end">
            What were my responsibilities?
          </span>
          <div className="my-web__job-description__wrapper">
            <div className="my-web__job-description">
              <ul>
                <li>Resolving tasks, creating apps from start to end</li>
                <li>
                  Developing, maintaining, monitoring and troubleshooting team
                  services{" "}
                </li>
                <li>Working within agile framework (Scrum, LESS) </li>
                <li>
                  Growing towards full stack development primarily on frontend
                  development but also expanding knowledge on working with
                  databases, system design, alerting and monitoring tools and
                  backend development{" "}
                </li>
                <li>
                  Under the guidance of Architects writing well designed,
                  testable and scalable code in accordance with clean code
                  principles{" "}
                </li>
                <li>
                  Expanding and improving knowledge both internally and
                  externally as a part of engineering community
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="my-web__cert__list">
        <div>Udemy courses I attended</div>
        <div className="my-web__cert__wrapper">
          <Course img={hooks} link={"https://udemy-certificate.s3.amazonaws.com/pdf/UC-45d6eb11-b38f-4bb3-b02b-97a9b4bdb3dd.pdf"}/>
          <Course img={webpack} link={"https://www.udemy.com/certificate/UC-9B6AY32B/"}/>
          <Course img={javascript} link={"https://www.udemy.com/certificate/UC-8207d41c-e3c0-4c0e-9b80-418aabf29d88/"}/>
          <Course img={ajax} link={"https://www.udemy.com/certificate/UC-IU9VKT17/"}/>
        </div>
      </div>

      <div className="my-web__cert__list">
        <div>HackerRank courses I attended</div>
        <div className="my-web__cert__wrapper">
          <Course img={jsbasics} link={"https://www.hackerrank.com/certificates/75673754bc21"}/>
          <Course img={jsadvanced} link={"https://www.hackerrank.com/certificates/iframe/e0c20aed3909"}/>
        </div>
      </div>

    </div>
  );
}

export default App;
