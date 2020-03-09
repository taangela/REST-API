const mongoose = require('mongoose');

const workshopsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  concertId : { type: mongoose.Schema.ObjectId, required: true },
});

module.exports = mongoose.model('Workshops', workshopsSchema);