const express = require("express");
require("dotenv").config();
const applyMiddleware = require("./middlewares");
const globalErrorHandler = require("./utils/globalErrorHandler");
const connectDB = require("./db/connectDB");

const app = express();
const port = process.PORT || 5001;
const authRoutes = require("./routes/v1/authentication");
const shopRoutes = require("./routes/v1/shop");
const usersRoutes = require("./routes/v1/users");
const productRoutes = require("./routes/v1/Product");
const checkOutRoutes = require("./routes/v1/check-out");
const salesCollectionRoutes = require("./routes/v1/salesCollection");
const stripeRoutes = require("./routes/v1/stripe");

applyMiddleware(app);

// Use a prefix for authentication routes
app.use(authRoutes);
app.use(shopRoutes);
app.use(usersRoutes);
app.use(productRoutes);
app.use(checkOutRoutes);
app.use(salesCollectionRoutes);
app.use("/stripe", stripeRoutes);

// Handle root URL
app.get("/", (req, res) => {
  res.send("Welcome to the inventoryManagement server!");
});

// Handling all unhandled routes
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// Error handling middleware
app.use(globalErrorHandler);

const main = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`inventoryManagement running on the port ${port}`);
  });
};

main();
