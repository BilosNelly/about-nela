import { ICourse } from "../typings";
import Course from "./course";

interface Props {
  courses: ICourse[];
}

export const CoursesList = (props: Props) => {
  return (
    <>
      {props.courses.map((course: ICourse) => {
        return (
          <Course link={course.link} img={course.img} />
        )
      })
      }
    </>
  );
};

export default CoursesList;