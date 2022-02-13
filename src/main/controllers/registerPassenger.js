const passengerModel = require('../models/passengerModel')

exports.registerPassenger = (req, res) => {
  const {
    name,
    surname,
    age,
    email,
    password,
    phoneNumber,
    quantityOfLuggages
  } = req.body;

  passengerModel.create({
      name,
      surname,
      age,
      email,
      password,
      phoneNumber,
      quantityOfLuggages
    }).then(() => res.status(200).json({ message: 'Passenger created successfully.'}))
    .catch((err) => res.status(404).json({ message: err}))
}