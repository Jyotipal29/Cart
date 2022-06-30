import { createContext, useContext, useReducer } from "react";
import * as actionTypes from "../constants/productConstants";

// import { productReducer } from "../reducer/productReducer";
// import { productDetailReducer } from "../reducer/productReducer";

const productContext = createContext();
export const useProduct = () => {
  return useContext(productContext);
};

export const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(productReducer, {
    products: [],
  });

  const [productDetailState, productDetailDispatch] = useReducer(
    productDetailReducer,
    {
      product: {},
    }
  );
  return (
    <productContext.Provider
      value={{
        productState,
        productDispatch,
        productDetailState,
        productDetailDispatch,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

export const productReducer = (productState = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return {
        products: action.payload,
      };
    default:
      return productState;
  }
};

export const productDetailReducer = (
  productDetailState = { product: {} },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_DETAILS:
      return {
        product: action.payload,
      };
    default:
      return productDetailState;
  }
};
