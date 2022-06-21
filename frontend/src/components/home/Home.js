import React from "react";
import "./home.css";
import SingleItem from "../singleItem/SingleItem";
import { useCart } from "../../context/Context";
import Filters from "../filters/Filters";

const Home = () => {
  const {
    productState: { product },
    // productState: { byStock, byFastDelivery, sort, searchQuery },
    productDispatch,
  } = useCart();
  // console.log("13", productState);

  // const transformProducts = () => {
  //   let sortedProducts = products;
  //   if (sort) {
  //     sortedProducts = sortedProducts.sort((a, b) =>
  //       sort === "lowToHigh" ? a.price - b.price : b.price - a.price
  //     );
  //   }

  //   if (!byStock) {
  //     sortedProducts = sortedProducts.filter((prod) => prod.inStock);
  //   }

  //   if (byFastDelivery) {
  //     sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
  //   }

  //   if (searchQuery) {
  //     sortedProducts = sortedProducts.filter((prod) =>
  //       prod.name.toLowerCase().includes(searchQuery)
  //     );
  //   }

  //   return sortedProducts;
  // };
  return (
    <div className="home">
      <div className="filters">{/* <Filters /> */}</div>
      <div className="product-container">
        {product &&
          product.map((item) => <SingleItem key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default Home;
