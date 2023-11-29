const CheckOut = require("../../models/check-out");

const getCheckOutProduct = async (req, res) => {
  const email = req.query.email;
  const query = { email: email };
  const result = await CheckOut.find(query);
  res.send(result);
};

module.exports = getCheckOutProduct;
