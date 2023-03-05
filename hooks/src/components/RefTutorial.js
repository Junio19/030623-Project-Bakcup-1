import React, { useRef } from "react";

const RefTutorial = () => {
  const textRef = useRef(null);

  const handleClick = () => {
    console.log(textRef.current.value);
  };

  return (
    <div>
      <h1>Shake</h1>
      <input type={"text"} placeholder={"Enter name"} ref={textRef} />
      <button onClick={handleClick}>Change name</button>
    </div>
  );
};

export default RefTutorial;
