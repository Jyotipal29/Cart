import { createContext, useContext, useReducer } from "react";
import * as actionTypes from "../constants/cartConstants";

const cartContext = createContext();
export const useCart = () => {
  return useContext(cartContext);
};

export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cart: [],
  });
  return (
    <cartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export const cartReducer = (cartState = { cart: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      const existItem = cartState.cart.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...cartState,
          cart: cartState.cart.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...cartState,
          cart: [...cartState.cart, item],
        };
      }

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...cartState,
        cart: cartState.cart.filter((x) => x.product !== action.payload),
      };
    default:
      return cartState;
  }
};
