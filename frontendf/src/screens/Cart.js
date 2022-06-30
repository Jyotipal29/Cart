// import { useEffect } from "react";
import { useEffect } from "react";
import CartItem from "../components/cartItem";
import { useProduct } from "../context/productContext";
import "./cart.css";

const Cart = () => {
  const {
    productState: { products },
  } = useProduct();
  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping Cart</h2>
        {products.map((item) => {
          return <CartItem item={item} key={item._id} />;
        })}
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen__info">
          <p>subtotal (0) items</p>
          <p>$499.99</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
