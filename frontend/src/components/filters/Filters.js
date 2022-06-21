// import React from "react";
// import { useCart } from "../../context/Context";
// import "./filters.css";
// const Filters = () => {
//   const {
//     productState: { byStock, byFastDelivery, sort, searchQuery },
//     productDispatch,
//   } = useCart();
//   return (
//     <div className="filters">
//       <span className="title">Filter Products</span>
//       <span>
//         <input
//           inline
//           label="Ascending"
//           name="group1"
//           type="radio"
//           id={`inline-1`}
//           onChange={() =>
//             productDispatch({
//               type: "SORT_BY_PRICE",
//               payload: "lowToHigh",
//             })
//           }
//           checked={sort === "lowToHigh" ? true : false}
//         />
//         Ascending
//       </span>
//       <span>
//         <input
//           inline
//           label="Descending"
//           name="group1"
//           type="radio"
//           id={`inline-2`}
//           onChange={() =>
//             productDispatch({
//               type: "SORT_BY_PRICE",
//               payload: "highToLow",
//             })
//           }
//           checked={sort === "HighToLow" ? true : false}
//         />
//         Descending
//       </span>
//       <span>
//         <input
//           inline
//           label="Include Out of Stock"
//           name="group1"
//           type="checkbox"
//           id={`inline-3`}
//           onChange={() =>
//             productDispatch({
//               type: "FILTER_BY_STOCK",
//             })
//           }
//           checked={byStock}
//         />
//         include out of stock
//       </span>
//       <span>
//         <input
//           inline
//           label="Fast Delivery Only"
//           name="group1"
//           type="checkbox"
//           id={`inline-4`}
//           onChange={() =>
//             productDispatch({
//               type: "FILTER_BY_DELIVERY",
//             })
//           }
//           checked={byFastDelivery}
//         />
//         fast Delivery only
//       </span>

//       <button
//         onClick={() =>
//           productDispatch({
//             type: "CLEAR_FILTERS",
//           })
//         }
//       >
//         clear filters
//       </button>
//     </div>
//   );
// };

// export default Filters;
