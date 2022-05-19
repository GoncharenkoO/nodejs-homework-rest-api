const express = require("express");

const { schemas } = require("../../models/User");

const { validation } = require("../../middlewares");

const ctrl = require("../../controllers/users");

const router = express.Router();

router.post("/signup", validation(schemas.add), ctrl.signup);

router.post("/login", validation(schemas.add), ctrl.login);

module.exports = router;
