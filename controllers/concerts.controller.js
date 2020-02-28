const Concerts = require('../models/concerts.model');


exports.getAll = async (req, res) => {
  try {
    res.json( await Concerts.find());
  }
  catch(err) {
    res.status(500).json(err)
  }
};

exports.getId = async (req, res) => {
  try {
    const dep = await Concerts.findById(req.params.id);
    if(!dep) res.status(404).json({ message: 'Not found' });
    else res.json(dep);
  }
  catch(err) {
    res.status(500).json(err);
  }
};


exports.post = async (req, res) => {
  try {
    const { performer, genre, price, day, image } = req.body;
    const newConcerts = new Concerts({ performer: performer, genre: genre, price: price, day: day, image: image });
    await newConcerts.save();
    res.json(await Concerts.find());
  } catch(err) {
    res.status(500).json(err);
  }
};

exports.put =  async (req, res) => {
  const { performer, genre, price, day, image } = req.body;
  try {
    const dep = await(Concerts.findById(req.params.id));
    if(dep) {
      await Concerts.updateOne({ _id: req.params.id }, { $set: { performer: performer, genre: genre, price: price, day: day, image: image }});
      res.json(await Concerts.find());
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const dep = await(Concerts.findById(req.params.id));
    if(dep) {
      await Concerts.deleteOne({ _id: req.params.id });
      res.json(await Concerts.find());
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json(err);
  }
};