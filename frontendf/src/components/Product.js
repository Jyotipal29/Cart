import React from "react";
import "./product.css";
import { Link } from "react-router-dom";

const Product = (item) => {
  const itemP = item.item;
  //   console.log(item.item);
  return (
    <div className="product">
      <img src={itemP.imageUrl} />
      <div className="product__info">
        <p className="info__name">{itemP.name}</p>
        <p className="info__description">{itemP.description}</p>
        <p className="info__price">{itemP.price}</p>
        <Link to={`/product/${itemP._id}`} className="info__button">
          view
        </Link>
      </div>
    </div>
  );
};

export default Product;
