import React, { useState } from "react";
import { data } from "./data";

const ArrayExample = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  const MapPeople = people.map((singlePerson) => {
    const { id, name } = singlePerson;
    return (
      <div key={id} className="item">
        <h4> {name} </h4>
        <button onClick={() => removeItem(id)}>Remove</button>
      </div>
    );
  });

  const handleCLick = () => {
    setPeople([]);
  };

  return (
    <>
      <h2>UseState Array Example</h2>
      {MapPeople}
      <button className="btn" onClick={handleCLick}>
        Clear Items
      </button>
    </>
  );
};

export default ArrayExample;
