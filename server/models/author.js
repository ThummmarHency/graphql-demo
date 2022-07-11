const mongoose = require("mongoose");
const schema = mongoose.Schema;

const authorschema = new schema({
  name: String,
  age: Number,
});

module.exports = mongoose.model("author", authorschema);
