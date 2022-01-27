import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  const getProducts = async () => {
    const respond = await fetch(url);
    const product = await respond.json();
    setProduct(product);
    setLoading(false);
    console.log(product);
  };

  useEffect(() => {
    getProducts();
  }, [url]);
  return { loading, product };
};
