import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h4>No Page were found</h4>
      <Link to="/" className="btn">
        {" "}
        Back to Home Page{" "}
      </Link>{" "}
    </div>
  );
};

export default Error;
