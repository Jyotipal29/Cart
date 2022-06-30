// import axios from "axios";
// import * as actionTypes from "../constants/cartConstants";
// import { productApi } from "../constants/api";

// export const removeFromCart = (id) => (dispatch, getState) => {
//   dispatch({
//     type: actionTypes.REMOVE_FROM_CART,
//     payload: id,
//   });

//   localStorage.setItem("cart", JSON.stringify(cart));
// };

// const addToCart = async (id, qty) => {
//   const { data } = await axios.get(productApi + `${id}`);
//   cartDispatch({
//     type: actionCartTypes.ADD_TO_CART,
//     payload: {
//       product: data._id,
//       name: data.name,
//       imageUrl: data.imageUrl,
//       price: data.price,
//       InStock: data.InStock,
//       qty,
//     },
//   });
//   localStorage.setItem("cart", JSON.stringify(cart));
// };

// const addToCartHandler = () => {
//   // addToCart(product.data._id, qty);
// };
