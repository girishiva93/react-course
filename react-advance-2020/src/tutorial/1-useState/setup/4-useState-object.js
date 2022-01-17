import React, { useState } from "react";
const UseStateBasics = () => {
  //   const [people, setPeople] = useState({
  //     name: "Shiva Giri",
  //     age: 23,
  //     message: "React UseState Course",
  //   });

  const [name, setName] = useState("Shiva Giri");
  const [age, setAge] = useState(21);
  const [message, setMessage] = useState("Random Text");

  /// ...person - split function
  const changeMessage = () => {
    // let x = "Hello React js ";
    // setPeople({ ...people, message: x });
    if (message === "Random Text") {
      setMessage("Hello World");
      setName("John ");
      setAge(23);
    } else {
      setMessage("Random Text");
      setName("Shiva Giri");
      setAge(21);
    }
  };

  return (
    <React.Fragment>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        {" "}
        Change Message
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
