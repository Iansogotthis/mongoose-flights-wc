const mongoose = require('mongoose');   // require mongoose
const Schema = mongoose.Schema;         // require Schema

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'Delta'],
    required: true
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'ORD', 'SAN'],
    required: true
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    required: true
  },
  departs: {
    type: Date,
    default: function() {
      const currentDate = new Date();
      const yearLater = currentDate.getFullYear() +1
      currentDate.setFullYear(yearLater);
      return currentDate;
    },
    required: true
  }
});

// flightSchema.path('airline').validate((value) => {
//   return ['American', 'Southwest', 'Delta'].includes(value);
// }, 'Invalid airline');

// flightSchema.path('airport').validate((value) => {
//   return ['AUS', 'DFW', 'DEN', 'LAX', 'ORD', 'SAN'].includes(value);
// }, 'Invalid airport');

// flightSchema.path('flightNo').validate((value) => {
//   return value >= 10 && value <= 9999;
// }, 'Invalid flight number');

// flightSchema.path('departs').validate((value) => {
//   const currentDate = new Date();
//   currentDate.setDate(currentDate.getDate() + 365);
//   return value.getTime() >= currentDate.getTime();
// }, 'Invalid departure date');

module.exports = mongoose.model('Flight', flightSchema);  // export the model 