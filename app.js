const express = require("express");
const app = express();
require("dotenv").config({path: '.env'});

const PORT = process.env.PORT || 4000;

const errorHandling = require('./middlewares/errorHandling')
// const router = require('./routes');

const indexRoutes = require("./routes/index")
const productRoutes = require("./routes/product");
const userRoutes = require('./routes/user');

const errorHandler = require("./middlewares/errorHandler");

app.use("/", indexRoutes);
app.use("/product", productRoutes);
app.use("/user", userRoutes);


// app.use('/', routes)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () => {
	console.log(`This Server brought you by port : ${PORT}`);
});