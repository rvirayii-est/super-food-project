const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const User = require("../../models/User");
const auth = require("../../middleware/auth");
const { route } = require("./auth");

// @route POST api/users
// @desc Register user
// @access Public
router.get("/", [auth], (req, res) => {
	res.json({ msg: "TEST" });
});
// @route POST api/users
// @desc Register user
// @access Public
router.post(
	"/",
	[
		check("name", "Name is required").not().isEmpty(),
		check("email", "Please include a valid email"),
		check(
			"password",
			"Please enter a password with 8 or more characters"
		).isLength({ min: 8 }),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, email, password } = req.body;
		try {
			//Checks if user exist
			let user = await User.findOne({ email });
			if (user) {
				res.status(400).json({ errors: [{ msg: "User already exist" }] });
			}
			//Create User Object
			user = new User({ name, email, password });
			//Encrypt Password
			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);
			await user.save();
			//Payload
			const payload = {
				user: {
					id: user.id,
				},
			};
			jwt.sign(
				payload,
				config.get("jwtSecret"),
				{ expiresIn: 3600 },
				(err, token) => {
					if (err) throw err;
					//Set Cookie
					res.cookie("access_Token", token, {
						maxAge: 36000,
						httpOnly: true,
						//secure: true
					});
					res.json({ token });
				}
			);
		} catch (err) {
			console.log(err.message);
			res.status(500).send("Server Error");
		}
	}
);

module.exports = router;
