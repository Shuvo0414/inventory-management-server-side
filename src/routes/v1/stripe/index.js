// routes/v1/stripe.js

const express = require("express");
const router = express.Router();

const stripePayment = require("../../../api/stripe/stripe");
router.post("/creat-payment-intent", stripePayment);

module.exports = router;
