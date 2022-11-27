import * as React from "react";

interface Props {
  name: string;
}

export const Chip = (props: Props) => {
  return (
    <div className="my-web__skills__item">
      <span>{props.name}</span>
    </div>
  );
};

export default Chip;
