const express = require('express');
const mongoose = require('mongoose');
const Restaurant = require('./models/restaurant');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost/lab3_restaurant_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/restaurants/cuisine/:cuisine', async (req, res) => {
  const { cuisine } = req.params;
  try {
    const restaurants = await Restaurant.find({ cuisines: cuisine });
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/restaurants', async (req, res) => {
  const { sortBy } = req.query;
  try {
    const sortOrder = sortBy === 'DESC' ? -1 : 1;
    const restaurants = await Restaurant.find()
      .select('id cuisines name city restaurant_id')
      .sort({ restaurant_id: sortOrder });
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/restaurants/:cuisine', async (req, res) => {
  const { cuisine } = req.params;
  try {
    const restaurants = await Restaurant.find({
      cuisines: cuisine,
      city: { $ne: 'Brooklyn' },
    })
      .select('cuisines name city')
      .sort({ name: 1 });
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/restaurants/:cuisine', async (req, res) => {
    const { cuisine } = req.params;
    try {
      const restaurants = await Restaurant.find({
        cuisines: cuisine,
        city: { $ne: 'Brooklyn' },
      })
        .select('cuisines name city')
        .sort({ name: 1 });
      res.json(restaurants);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});
  
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});