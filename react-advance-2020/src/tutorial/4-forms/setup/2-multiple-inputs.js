import React, { useState } from "react";

const ControlledInputs = () => {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });

  const handleChange = (e) => {
    const name = e.target.name; // yesle tei hamro input ma rakhe ko name vanne kura lako xa
    const value = e.target.value; // yesle tei hamro input  ma rakhe ko value vanne kura lako xa
    setPerson({ ...person, [name]: value }); // [name] yesari kina name rakheko vane hamro multiple inputs xa so multiple inputs ma hami lay firstname, email, age pass gareko xam
    // console.log(name, value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      e.preventDefault();
      const newPeople = { ...person, id: new Date().getTime().toString() };
      setPeople([...people, newPeople]);
      //   form fill up garera submit garesi empty garne value
      setPerson({ firstName: "", email: "", age: "" });
    } else {
      console.log("Some field is missing ");
    }
  };
  return (
    <>
      <article>
        <form className=" form ">
          <div className="form-control">
            <label htmlFor="firstName"> Name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email"> Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="Age"> Age: </label>
            <input
              type="text"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            {" "}
            add person{" "}
          </button>
        </form>
        {people.map((person) => {
          const { id, firstName, email, age } = person;
          return (
            <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{age}</p>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
      ;
    </>
  );
};

export default ControlledInputs;
