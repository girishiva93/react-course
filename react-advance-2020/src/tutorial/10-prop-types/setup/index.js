import React from "react";
import { useFetch } from "../../9-custom-hooks/setup/2-useFetch";
import Product from "./Product";
const url = "https://course-api.com/react-prop-types-example";

const Index = () => {
  const { loading, product } = useFetch(url);
  return (
    <div>
      <h2>products</h2>
      <section className="products">
        {product.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default Index;
