import React, { useState } from "react";
import { data } from "../../../data";
const UseStateBasics = () => {
  const [people, setPeople] = useState(data);

  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name } = person;

        const removeItem = (id) => {
          let newPeople = people.filter((person) => person.id !== id);
          setPeople(newPeople);
        };

        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        Clear
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
