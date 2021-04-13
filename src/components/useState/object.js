import React, { useState } from "react";

const ObjectExample = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    des: "manager",
  });

  const changeDesignation = () => {
    setPerson({ ...person, message: "Hello World" });
  };
  return (
    <>
      <h2>UseState Object Example</h2>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>{person.des}</h4>
      <button className="btn" onClick={changeDesignation}>
        Change Designation
      </button>
    </>
  );
};

export default ObjectExample;
