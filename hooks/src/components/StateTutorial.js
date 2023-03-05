import React, { useState } from "react";

const StateTutorial = () => {
  const [showValue, setShowValue] = useState("Shake");

  return (
    <div>
      <input
        type={"text"}
        placeholder={"type anything"}
        onChange={(e) => setShowValue(e.target.value)}
      />
      {showValue}
    </div>
  );
};

export default StateTutorial;
