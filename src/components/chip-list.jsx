import Chip from "./chip";

export const ChipList = (props) => {
  return (
    <div className="my-web__skills__item__wrapper">
      {props.skills.map((skill) => {
        return <Chip name={skill} />;
      })}
    </div>
  );
};

export default ChipList;
