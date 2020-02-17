const express = require('express');
//const cors = require('express-cors');
//const uuidv4 = require('uuid/v4');


const testimonialsRoutes = require('./routes/testimonials.routes');
const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');


const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/', testimonialsRoutes);
app.use('/api/', concertsRoutes);
app.use('/api/', seatsRoutes);


app.use((req, res) => {
  res.status(404).json({ message: 'Not found...' });
})

app.listen(9000, () => {
  console.log('Server is running on port: 9000');
});