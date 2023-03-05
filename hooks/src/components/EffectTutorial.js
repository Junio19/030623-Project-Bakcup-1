import React, { useEffect, useState } from "react";
import axios from "axios";

const EffectTutorial = () => {
  const [data, setData] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API was called");
      });
  }, [counter]);

  return (
    <div>
      <h2>Hello {data}</h2>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Click</button>
    </div>
  );
};

export default EffectTutorial;
