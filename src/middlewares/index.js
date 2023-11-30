const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const { LOCAL_CLIENT, CLIENT } = require("../config/defaults");

const applyMiddleware = (app) => {
  // middleware
  app.use(
    cors({
      origin: [
        "https://fabulous-vacherin-c5fc87.netlify.app",
        "http://localhost:5173",
      ],
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(cookieParser());
};

module.exports = applyMiddleware;
