import React from "react";
import { Link } from "react-router-dom";
import "./cartItem.css";
const CartItem = (item) => {
  const itemP = item.item;
  console.log(itemP);
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={itemP.imageUrl} />
      </div>
      <Link to={`/product/${itemP._id}`} className="cartitem__name">
        <p>{itemP.name}</p>
      </Link>
      <p className="cartitem__price">{itemP.price}</p>
      <select className="cartitem__select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button className="cartitem__deleteBtn">x</button>
    </div>
  );
};

export default CartItem;
