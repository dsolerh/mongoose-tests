const { Schema, model, SchemaTypes } = require("mongoose");

const addressSchema = new Schema({
  street: String,
  city: String,
});

const userSchema = new Schema({
  name: String,
  age: Number,
  email: String,
  createdAt: Date,
  updatedAt: Date,
  master: SchemaTypes.ObjectId,
  hobbies: [String],
  address: addressSchema,
});
const user = model("User", userSchema);

module.exports = user;
