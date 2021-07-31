import React from "react";
import Square from "./Square";

const Squares = ({ abilities }) => {
  const abilityList = abilities.map((ability) => (
    <Square name={ability.name} skills={ability.skills} icon={ability.icon} />
  ));

  return (
    <div class="squares-wrapper">
      <div class="squares">{abilityList}</div>
    </div>
  );
};

export default Squares;
