const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require('cors');
const connectDB = require("./config/db");
const path = require("path");

//const cors = require("cors");
//const Seed = require("./seed");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json({ extended: false }));
app.use(cookieParser());

//Connection to Mongo
connectDB();

//Seeds the database
//Seed();

//Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
	//Set static folder
	app.use(express.static("client/build"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}
//App listen
app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
