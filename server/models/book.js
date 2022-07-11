const mongoose = require("mongoose");
const schema = mongoose.Schema;

const bookschema = new schema({
  name: String,
  gerne: String,
  authorId: String,
});

module.exports = mongoose.model("Book", bookschema);
