import { useEffect } from "react";
import * as actionTypes from "../constants/productConstants";

import "./home.css";
import { getData } from "../action/productAction";
import Product from "../components/Product";
import { useProduct } from "../context/productContext";
const Home = () => {
  const {
    productDispatch,
    productState: { products },
  } = useProduct();
  useEffect(() => {
    getData().then((prod) =>
      productDispatch({
        type: actionTypes.GET_PRODUCTS,
        payload: prod,
      })
    );
  }, []);
  // console.log(products);
  return (
    <div className="homescreen">
      <h2 className="homescreen__title">latest products</h2>

      <div className="homescreen__products">
        {products.map((item) => {
          return <Product item={item} key={item._id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
