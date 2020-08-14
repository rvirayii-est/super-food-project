const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");

//const cors = require("cors");
//const Seed = require("./seed");


const PORT = process.env.PORT;

const app = express();
app.use(express.json({ extended: false }));
app.use(cookieParser());

//Connection to Mongo
connectDB();

//Seeds the database
//Seed();

//Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

//App listen
app.listen(PORT || 3000, () => {
	console.log(`Server started on port`);
});