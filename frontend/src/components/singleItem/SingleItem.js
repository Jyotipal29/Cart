import React from "react";
import { useCart } from "../../context/Context";
import "./single.css";
const SingleItem = ({ item }) => {
  // console.log(item);

  // console.log(item);
  // const {
  //   state: { cart },
  //   dispatch,
  // } = useCart();
  return (
    <div className="products">
      <img className="img" src={item.imageUrl} alt="" />
      <p>{item.name}</p>
      <p>{item.price}</p>
      {/* {item.fastDelivery ? (
        <div>Fast Delivery</div>
      ) : (
        <div>4 days delivery</div>
      )}
      {cart.some((p) => p.id === item.id) ? (
        <button
          onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}
        >
          remove from cart
        </button>
      ) : (
        <button
          disabled={!item.inStock}
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
        >
          {!item.inStock ? "out of stock" : " add to cart"}
        </button>
      )} */}
    </div>
  );
};

export default SingleItem;
