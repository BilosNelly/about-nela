import "./MyWeb.scss";
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
import { ChipList, Container, Course, JobDescription } from "./components";

const skills = [
  'React',
  'Typescript',
  'Javascript',
  'NodeJS',
  'GraphQl',
  'CSS',
  'Less',
  'Sass',
  'Webpack',
  'Git',
  'Github',
  'Linux',
  'Scrum',
  'Jira',
  'Confluence'
]

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
        {/* This will be ContainerList */}
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
    
          <ChipList skills={skills}/>

          <span className="my-web__about__title align-end">
            What were my responsibilities?
          </span>

          <JobDescription/>

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
