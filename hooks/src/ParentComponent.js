import React, { useCallback, useState } from "react";
import Count from "./callback/Count";
import Title from "./callback/Title";
import Button from "./callback/Button";

const ParentComponent = () => {
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(500);

  const incrementAge = useCallback(() => {
    setAge(age + 10);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 500);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text={"Age"} count={age} />
      <Button type={"Increment Age"} handleClick={incrementAge} />
      <Count text={"Salary"} count={salary} />
      <Button type={"Increment Salary"} handleClick={incrementSalary} />
    </div>
  );
};

export default ParentComponent;
