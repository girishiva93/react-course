import React from "react";
import PropType from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ image, name, price }) => {
  const url = image && image.url;
  return (
    <article className="product">
      <img src={url || defaultImage} alt={name} />
      <h4>{name}</h4>
      <p>{price || 3.99}</p>
    </article>
  );
};

Product.PropType = {
  image: PropType.object.isRequired,
  name: PropType.string.isRequired,
  price: PropType.string.isRequired,
};

Product.defaultProps = {
  name: "default name",
  price: 55,
  image: defaultImage,
};

export default Product;
