import React, { useState, useContext } from "react";
import { data } from "../../../data";

const PersonContext = React.createContext();
// two component - provider, consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <>
      <PersonContext.Provider value={{ removeItem, people }}>
        <section>
          <h3>Prop Drilling</h3>
          <List />
        </section>
      </PersonContext.Provider>
    </>
  );
};

const List = () => {
  const mainData = useContext(PersonContext);
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removeItem } = useContext(PersonContext);

  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removeItem(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
