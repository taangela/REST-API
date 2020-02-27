const express = require('express');
const router = express.Router();
const Testimonials = require('../models/Testimonials.model');

router.get('/testimonials', async (req, res) => {
  try {
    res.json( await Testimonials.find());
  }
  catch(err) {
    res.status(500).json(err)
  }
});

router.get('/testimonials/random', async (req, res) => {

  try {
    const count = await Testimonials.countDocuments();
    const rand = Math.floor(Math.random() * count);
    const dep = await Testimonials.findOne().skip(rand);
    if(!dep) res.status(404).json({ message: 'Not found' });
    else res.json(dep);
  }
  catch(err) {
    res.json(err);
  }

});

router.get('/testimonials/:id', async (req, res) => {
  try {
    const dep = await Testimonials.findById(req.params.id);
    if(!dep) res.status(404).json({ message: 'Not found' });
    else res.json(dep);
  }
  catch(err) {
    res.status(500).json(err);
  }
});


router.post('/testimonials', async (req, res) => {
  try {
    const { author, text } = req.body;
    const newTestimonials = new Testimonials({ author: author, text: text});
    await newTestimonials.save();
    res.json({ message: 'OK' });
  } catch(err) {
    res.status(500).json(err);
  }
});

router.put('/testimonials/:id', async (req, res) => {
  const { author, text } = req.body;
  try {
    const dep = await(Testimonials.findById(req.params.id));
    if(dep) {
      await Testimonials.updateOne({ _id: req.params.id }, { $set: { author: author, text: text }});
      res.json({ message: 'OK' });
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json(err);
  }
});

router.delete('/testimonials/:id', async (req, res) => {
  try {
    const dep = await(Testimonials.findById(req.params.id));
    if(dep) {
      await Testimonials.deleteOne({ _id: req.params.id });
      res.json({ message: 'OK' });
    }
    else res.status(404).json({ message: 'Not found...' });
  }
  catch(err) {
    res.status(500).json(err);
  }
});
module.exports = router;

