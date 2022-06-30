import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productApi } from "../constants/api";
import * as actionTypes from "../constants/productConstants";
import axios from "axios";
import { useProduct } from "../context/productContext";
import "./productScreen.css";

const ProductScreen = () => {
  const { id } = useParams();

  const {
    productDetailState: { product },
    productDetailDispatch,
  } = useProduct();
  console.log("16", product);
  const getDetails = async (id) => {
    const resp = await axios.get(productApi + `${id}`);
    const mData = await resp.data;
    console.log("29", resp);
    productDetailDispatch({
      type: actionTypes.GET_PRODUCTS_DETAILS,
      payload: mData,
    });
  };
  console.log("25", product);
  getDetails(id);

  useEffect(() => {}, []);

  const [qty, setQty] = useState(1);
  console.log("32", product);

  return (
    <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__image">
          <img src={product.data.imageUrl} />
        </div>
        <div className="left__info">
          <p className="left__name">{product.data.name}</p>
          <p>{product.data.price}</p>
          <p>{product.data.description}</p>
        </div>
      </div>
      <div className="productscreen__right">
        <div className="right__info">
          <p>{product.data.price}</p>
          <p>{product.data.InStock > 0 ? "In Stock" : "Out Of Stock"}</p>
          <p>
            {qty}
            <select value={qty} onChange={(e) => setQty(e.target.value)}>
              {[...Array(product.data.InStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          </p>
          <p>
            <button
              type="button"
              // onClick={addToCartHandler}
            >
              Add to Cart
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
