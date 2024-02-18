const mongoose = require('mongoose');   // require mongoose
const Schema = mongoose.Schema;         // require Schema

const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date
  });


module.exports = mongoose.model('Flight', flightSchema);  // export the model