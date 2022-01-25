import React, { useEffect, useRef } from "react";

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const devContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    console.log(devContainer.current);
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  return (
    <>
      <form className="form" onChange={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit"> submit </button>
        </div>
      </form>
      <div ref={devContainer}>hello world</div>
    </>
  );
};

export default UseRefBasics;
