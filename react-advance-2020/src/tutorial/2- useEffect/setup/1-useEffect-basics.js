import React, { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  // useEffect is used when we want to setup sideeffect and i.e. some work outside of the component

  //   useEffect(() => {
  //     console.log("call useEffect");
  //     if (value >= 1) {
  //       document.title = `New Message (${value})`;
  //     }
  //   });
  //   console.log("render component");

  // use Effect Dependency
  useEffect(() => {
    console.log("call useEffect");
    if (value >= 1) {
      document.title = `New Message (${value})`;
    }
  }, [value]);

  useEffect(() => {
    console.log("Hello world");
  }, []);

  console.log("render component");

  return (
    <>
      <h1>{value}</h1>
      <button type="button" className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
