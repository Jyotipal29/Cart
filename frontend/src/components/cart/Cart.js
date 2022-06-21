// import React, { useEffect, useState } from "react";
// import SingleItem from "../singleItem/SingleItem";
// import { useCart } from "../../context/Context";

// const Cart = () => {
//   const [total, setTotal] = useState(0);
//   const {
//     state: { cart },
//     dispatch,
//   } = useCart();

//   useEffect(() => {
//     setTotal(cart.reduce((acc, currVal) => acc + Number(currVal.price), 0));
//   }, [cart]);
//   return (
//     <div className="product-container">
//       <h2>total:{total}</h2>
//       {cart.map((item) => (
//         <div className="products">
//           <img className="img" src={item.image} alt="" />
//           <p>{item.name}</p>
//           <p>{item.price}</p>

//           {item.fastDelivery ? (
//             <div>Fast Delivery</div>
//           ) : (
//             <div>4 days delivery</div>
//           )}

//           {cart.some((p) => p.id === item.id) ? (
//             <button
//               onClick={() =>
//                 dispatch({ type: "REMOVE_FROM_CART", payload: item })
//               }
//             >
//               remove from cart
//             </button>
//           ) : (
//             <button
//               disabled={!item.inStock}
//               onClick={() => dispatch({ type: "ADD_TO_CART", payload: item })}
//             >
//               {!item.inStock ? "out of stock" : " add to cart"}
//             </button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cart;
