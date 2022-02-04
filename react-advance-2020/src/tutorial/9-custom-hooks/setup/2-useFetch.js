import { useState, useEffect, useCallback } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  const getProducts = useCallback(async () => {
    const respond = await fetch(url);
    const product = await respond.json();
    setProduct(product);
    setLoading(false);
    console.log(product);
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);
  return { loading, product };
};
