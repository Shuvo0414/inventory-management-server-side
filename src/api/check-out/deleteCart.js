const CheckOut = require("../../models/check-out");
const { ObjectId } = require("mongodb");
const deleteCart = async (req, res) => {
  const id = req.params.id;
  const query = { _id: new ObjectId(id) };
  const result = await CheckOut.deleteOne(query);
  res.send(result);
};

module.exports = deleteCart;
