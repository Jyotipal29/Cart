import * as actionTypes from "../constants/productConstants";
import { productApi } from "../constants/api";
import axios from "axios";

export const getData = async () => {
  const res = await axios.get(productApi);
  if (res) {
    const productData = await res.data;

    return productData;
  }
};

// export const removeProductDetails = () => (dispatch) => {
//   dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });
// };
