import React from "react";

const ErrorExample = () => {
  let title = "Hello world";

  const handleClick = () => {
    title = "Title were Change";
    console.log(title);
  };
  return (
    <>
      <h2>{title}</h2>
      <button type="button" onClick={handleClick} className="btn">
        Change Title
      </button>
    </>
  );
};

export default ErrorExample;
