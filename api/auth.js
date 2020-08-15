const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");

const User = require("../../models/User");

// @route POST api/users
// @desc Authenticate User & Get Token
// @access Public
router.post(
	"/",
	[
		check("email", "Please include a valid email"),
		check("password", "Password is required").exists(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, password } = req.body;
		try {
			//Checks if user exist
			let user = await User.findOne({ email });
			if (!user) {
				res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
			}
			//Match the password in database
			const isMatch = await bcrypt.compare(password, user.password); //body - database
			if (!isMatch) {
				res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
			}
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
