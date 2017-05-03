const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const weaponItem = Schema({
  name : {type: String, required: true},
  details : {type: String, max: 1048},
  date: {type: Date, default: Date.now},
  type: {type: String, max: 1048}
})

module.exports = mongoose.model('note', weaponItem)
