const passengerModel = require("../models/passengerModel");

exports.getPassengers = async (req, res) => {
  try {
    const passengersData = await passengerModel.find();
    res.status(200).json(passengersData);
  } catch (err) {
    res.status(404).json({ message: err });
  };
};
