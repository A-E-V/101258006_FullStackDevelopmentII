// models/restaurant.js
const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  // Define your schema fields here
  name: String,
  cuisines: String,
  city: String,
  restaurant_id: Number,
  // Add other fields as needed
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
