const express = require('express');
const router = express.Router();
//const db = require('../db.js');
//const uuidv4 = require('uuid/v4');
const Seats = require('../models/Seats.model');


router.get('/seats', async (req, res) => {
  try {
    res.json( await Seats.find());
  }
  catch(err) {
    res.status(500).json(err)
  }
});


router.get('/seats/:id', async (req, res) => {
  try {
    const dep = await Seats.findById(req.params.id);
    if(!dep) res.status(404).json({ message: 'Not found' });
    else res.json(dep);
  }
  catch(err) {
    res.status(500).json(err);
  }
});


router.post('/seats', async (req, res) => {
  const { day, seat, client, email } = req.body;

  try {
    const newSeats = new Seats({ day: day, seat: seat, client: client, email: email });
    await newSeats.save();
    res.json(newSeats);
    
  } catch(err) {
    res.status(500).json(err);
  }
});


router.put('/seats/:id', async (req, res) => {
  const { day, seat, client, email } = req.body;
  try {
    const dep = await(Seats.findById(req.params.id));
    if(dep) {
      await Seats.updateOne({ _id: req.params.id }, { $set: { day: day, seat: seat, client: client, email: email }});
      res.json({ message: 'OK' });
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json(err);
  }
});


router.delete('/seats/:id', async (req, res) => {
  try {
    const dep = await(Seats.findById(req.params.id));
    if(dep) {
      await Seats.deleteOne({ _id: req.params.id });
      res.json({ message: 'OK' });
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json(err);
  }
});


module.exports = router;