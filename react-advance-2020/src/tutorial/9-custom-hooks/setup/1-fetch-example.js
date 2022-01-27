import React, { useState, useEffect } from "react";
import { useFetch } from "./2-useFetch";
const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  const { loading, product } = useFetch(url);
  return <h1>{loading ? "loading..." : "data"}</h1>;
};

export default Example;
