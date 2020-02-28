const Seats = require('../models/Seats.model');

exports.getAll = async (req, res) => {
  try {
    res.json( await Seats.find());
  }
  catch(err) {
    res.status(500).json(err)
  }
};


exports.getId = async (req, res) => {
  try {
    const dep = await Seats.findById(req.params.id);
    if(!dep) res.status(404).json({ message: 'Not found' });
    else res.json(dep);
  }
  catch(err) {
    res.status(500).json(err);
  }
};


exports.post = async (req, res) => {
  const { day, seat, client, email } = req.body;

  try {
    const newSeats = new Seats({ day: day, seat: seat, client: client, email: email });
    await newSeats.save();
    res.json(await Seats.find());
    
  } catch(err) {
    res.status(500).json(err);
  }
};


exports.put =  async (req, res) => {
  const { day, seat, client, email } = req.body;
  try {
    const dep = await(Seats.findById(req.params.id));
    if(dep) {
      await Seats.updateOne({ _id: req.params.id }, { $set: { day: day, seat: seat, client: client, email: email }});
      res.json(await Seats.find());
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json(err);
  }
};


exports.delete = async (req, res) => {
  try {
    const dep = await(Seats.findById(req.params.id));
    if(dep) {
      await Seats.deleteOne({ _id: req.params.id });
      res.json(await Seats.find());
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json(err);
  }
};