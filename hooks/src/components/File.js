import React, { useRef } from "react";

const File = () => {
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type={"text"} />
      <button onClick={focus}>Click</button>
    </div>
  );
};

export default File;
