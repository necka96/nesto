const mongoose = require('mongoose');

// izreke Schema

const Izreke = mongoose.model("Izreke",{
 author: {
  type: String,
  require: true
 },
 quote: {
  type: String,
  require: true
 }
})

module.exports = { Izreke }