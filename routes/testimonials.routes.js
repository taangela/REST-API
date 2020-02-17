const express = require('express');
const router = express.Router();
const db = require('../db.js');
const uuidv4 = require('uuid/v4');

router.route('/testimonials').get((req, res) => {
  res.json(db.testimonials);
});

router.route('/testimonials/random').get((req, res) => {
  const testimonialsData = db.testimonials;
  const randomTestimonial = testimonialsData[Math.floor(Math.random() * testimonialsData.length)];
  return res.json(randomTestimonial);
});

router.route('/testimonials/:id').get((req, res) => {
  res.json(db.testimonials[req.params.id - 1]);
});

router.route('/testimonials').post((req, res) => {
  const { author, text } = req.body;
  const id = uuidv4();
  res.json({ message: 'ok' });
});
router.route('/testimonials/:id').put((req, res) => {
  const { author, text } = req.body;
  res.json({ message: 'ok' });
});
router.route('/testimonials/:id').delete((req, res) => {
  res.json({ message: 'ok' });
});
router.route('/testimonials').get((req, res) => {
  res.json(db.testimonials);
});
module.exports = router;

