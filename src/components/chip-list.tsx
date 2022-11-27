import Chip from "./chip";

interface Props {
  skills: string[];
}

export const ChipList = (props: Props) => {
  return (
    <div className="my-web__skills__item__wrapper">
      {props.skills.map((skill) => {
        return <Chip name={skill} />;
      })}
    </div>
  );
};

export default ChipList;
