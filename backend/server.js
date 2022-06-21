const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

const connectDB = require("./config/db");
const productRoutes = require("./router/productRoutes");

connectDB();
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
