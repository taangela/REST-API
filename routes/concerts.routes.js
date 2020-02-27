const express = require('express');
const router = express.Router();
const Concerts = require('../models/Concerts.model');


router.get('/concerts', async (req, res) => {
  try {
    res.json( await Concerts.find());
  }
  catch(err) {
    res.status(500).json(err)
  }
});

router.get('/concerts/:id', async (req, res) => {
  try {
    const dep = await Concerts.findById(req.params.id);
    if(!dep) res.status(404).json({ message: 'Not found' });
    else res.json(dep);
  }
  catch(err) {
    res.status(500).json(err);
  }
});


router.post('/concerts', async (req, res) => {
  try {
    const { performer, genre, price, day, image } = req.body;
    const newConcerts = new Concerts({ performer: performer, genre: genre, price: price, day: day, image: image });
    await newConcerts.save();
    res.json({ message: 'OK' });
  } catch(err) {
    res.status(500).json(err);
  }
});

router.put('/concerts/:id', async (req, res) => {
  const { performer, genre, price, day, image } = req.body;
  try {
    const dep = await(Concerts.findById(req.params.id));
    if(dep) {
      await Concerts.updateOne({ _id: req.params.id }, { $set: { performer: performer, genre: genre, price: price, day: day, image: image }});
      res.json({ message: 'OK' });
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.delete('/concerts/:id', async (req, res) => {
  try {
    const dep = await(Concerts.findById(req.params.id));
    if(dep) {
      await Concerts.deleteOne({ _id: req.params.id });
      res.json({ message: 'OK' });
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;