import './styles/MyWeb.scss';

import { ChipList, JobDescription, FAQ, ContainerList, Introduction, CoursesList, Publications } from './components';
import { containerList, hackerRankCourses, udemyCourses, skills } from './constants';

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
        <ContainerList containerItems={containerList} />
      </div>
      <Introduction />
      <div className="my-web__skills__wrapper">
        <div className="my-web__skills">
          <span className="my-web__about__title">
            Some of the tools I learned to work with at Infobip..
          </span>
          <ChipList skills={skills} />
          <span className="my-web__about__title align-end">
            What were my responsibilities?
          </span>
          <JobDescription />
        </div>
      </div>
      <div className="my-web__cert__list">
        <div>Udemy courses I attended</div>
        <div className="my-web__cert__wrapper">
          <CoursesList courses={udemyCourses} />
        </div>
      </div>
      <div className="my-web__cert__list">
        <div>HackerRank courses I attended</div>
        <div className="my-web__cert__wrapper">
          <CoursesList courses={hackerRankCourses} />
        </div>
      </div>
      <FAQ />
      {/* <ContactForm /> */}
      <Publications/>
    </div>
  );
}

export default App;
