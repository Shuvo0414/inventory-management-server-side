require("dotenv").config();
const http = require("http");
const app = require("./src/app");
const connectDB = require("./src/db/connectDB");

const server = http.createServer(app);
const port = process.env.PORT || 5001;

const main = async () => {
  await connectDB();
  server.listen(port, () => {
    console.log("listening to port ", port);
  });
};

main();
