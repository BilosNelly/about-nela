// This will be CoursesList Component, with Course component
export const Course = (props) => {
  return (
    <div
      className="my-web__cert"
      title={"Click to see the orginal certification!"}
      onClick={() => window.location.assign(props.link)}
    >
      <div className="my-web__cert__img">
        <img src={props.img} />
      </div>
    </div>
  );
};

export default Course;
