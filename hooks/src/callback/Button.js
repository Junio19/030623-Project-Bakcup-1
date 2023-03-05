import React from "react";

const Button = ({ handleClick, type }) => {
  console.log(`Rendering button: ${type}`);
  return <button onClick={handleClick}>{type}</button>;
};

export default React.memo(Button);
