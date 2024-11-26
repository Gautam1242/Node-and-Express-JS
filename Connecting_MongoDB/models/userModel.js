const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 50,
  },
  age: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//schema ka use karke model create kia and then import kia
const UserModel = model("Users", UserSchema);

module.exports = UserModel;
