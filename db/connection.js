// Require dotenv
require('dotenv').config();

// require mongoose
const mongoose = require('mongoose');

// connect to a local database called welp
// Connect to a local database called welp
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect("mongodb://localhost/recipe");
}
mongoose.connection.on("error", function(err) {
  console.error("MongoDB connection error: " + err);
  process.exit(-1);
});
mongoose.connection.once("open", function() {
  console.log("Mongoose has connected to MongoDB!");
});

// export your mongoose connection
module.exports = mongoose;