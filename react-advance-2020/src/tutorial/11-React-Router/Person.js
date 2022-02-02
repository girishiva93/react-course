import React, { useState, useEffect } from "react";
import { data } from "../../data";
import { Link, useParams } from "react-router-dom";

const Person = () => {
  const [fullname, setFullname] = useState("default name");
  const { name } = useParams();

  useEffect(() => {
    const newPerson = data.find((person) => person.name === parseInt(name));
    setFullname(newPerson);
  }, []);

  return (
    <div>
      <h2>{name}</h2>
      <Link to="/people" className="btn">
        Back to People
      </Link>
    </div>
  );
};

export default Person;
