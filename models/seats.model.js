const mongoose = require('mongoose');

const seatsSchema = new mongoose.Schema({
  email: { type: String, required: true },
  client: { type: String, required: true },
  seat: { type: Number, required: true },
  day: { type: Number, required: true }
});

module.exports = mongoose.model('Seats', seatsSchema);