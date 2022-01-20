import React, { useState } from "react";

// const ShortCircuit = () => {
//   const { text, setText } = useState("");
//   const firstLetter = text || "Hello World ";
//   const secondLetter = text && "Hello World - Second"; // yesma kina aako xaina browser ma vani hami lay useState ma kei value pass gareko xaina tei vayera ho
//   return (
//     <>
//       <h1>{text || "Shiva Giri"}</h1>
//       {text && <h1>Hello World</h1>}
//     </>
//   );
// };

// *************************************************8
// Ternary Operator
const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  return (
    <>
      <h1>{text || "Shiva Giri"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {/* Ternary Operator */}
      {isError ? (
        <p>There is an Error...</p>
      ) : (
        <div>
          <br />
          <h3>There is not any Error</h3>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
