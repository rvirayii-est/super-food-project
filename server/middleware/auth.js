const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
	//Get Token Header
	const token = req.cookies.access_Token;
	console.log(token);
	//Check if no Token
	if (!token) {
		return res.status(401).json({ msg: "No token, authorization denied" });
	}
	//Verify Token
	try {
		const decoded = jwt.verify(token, config.get("jwtSecret"));
		req.user = decoded.user;
		next();
	} catch (err) {
		res.status(401).json({ msg: "Token is not valid" });
	}
};
