const mongoose = require("mongoose");

const url =
  "mongodb://chets:chets12@cluster0-shard-00-00.9hwdr.mongodb.net:27017,cluster0-shard-00-01.9hwdr.mongodb.net:27017,cluster0-shard-00-02.9hwdr.mongodb.net:27017/clgdiscuss-mern?ssl=true&replicaSet=atlas-qblq7g-shard-0&authSource=admin&retryWrites=true&w=majority";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((error) => console.log("Error: ", error));
};
