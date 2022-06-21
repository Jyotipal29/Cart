import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
// import { cartReducer } from "./Reducer";
// import { filterReducer } from "./Reducer";
import { actionTypes } from "../constants/actionType";
// import { apiUrl } from "../constants/apiUrl";
const cartContext = createContext();
export const useCart = () => {
  return useContext(cartContext);
};

export const CartProvider = ({ children }) => {
  const productReducer = (productState, action) => {
    switch (action.type) {
      case actionTypes.SET_PRODUCTS_DATA:
        return {
          ...productState,
          product: action.payload,
        };
      // case actionTypes.SHOW_PRODUCTS:
      //   return {
      //     ...productState,
      //     // products: apiData,
      //   };
      default:
        return productState;
    }
  };

  const [productState, productDispatch] = useReducer(productReducer, {
    products: [],
  });
  // console.log(apiData);
  console.log(productState.products);
  // const [wishlistState, wishlistDispatch] = useReducer(wishlistReducer, {
  //   wishlist: [],
  // });
  // const [cartstate, cartDispatch] = useReducer(cartReducer, {
  //   products: [],
  //   cart: [],
  // });

  // const [filterState, filterDispatch] = useReducer(filterReducer, {
  //   byStock: false,
  //   byFastDelivery: false,
  //   searchQuery: "",
  //   sort: false,
  // });
  return (
    <cartContext.Provider value={{ productState, productDispatch }}>
      {children}
    </cartContext.Provider>
  );
};
