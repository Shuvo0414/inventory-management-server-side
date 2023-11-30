const SalesCollection = require("../../models/salesCollection");

const getSales = async (req, res) => {
  const email = req.query.email;
  const page = req.query.page || 1;
  const itemsPerPage = 10;

  // Parse page as an integer
  const pageNumber = parseInt(page, 10);

  const skip = (pageNumber - 1) * itemsPerPage;

  const query = { userEmail: email };
  const result = await SalesCollection.find(query)
    .sort({ sallingDate: -1 })
    .skip(skip)
    .limit(itemsPerPage);

  res.send(result);
};

module.exports = getSales;
