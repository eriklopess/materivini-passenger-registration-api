const mongoose = require('mongoose');

const passengerSchema = new mongoose.Schema({
  id: { type: Number },
  name: { type: String, required: true },
  surname: { type: String, required: true },
  age: { type: Number, required: true},
  email: { type: String, required: true },
  password: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  quantityOfLuggages: { type: Number, required: true }
});

const passengerModel = mongoose.model('passenger', passengerSchema);

module.exports = passengerModel;
5