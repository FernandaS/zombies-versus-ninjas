
var mongoose = require('mongoose')
var Schema = mongoose.Schema;
	

var Zombie = new Schema({
	name: {type: String, required: true, lowercase: true},
	health: {type: Number, required: true, min: 0, max: 300, default: 50},
	ninjasKilled: {type: Number, min: 0, default: 0}
});

module.exports = mongoose.model('Zombie', Zombie);