
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

	

var Ninja = new Schema({
	name: {type: String, required: true, lowercase: true},
	health: {type: Number, required: true, min: 0, max: 300, default: 50},
	weapons: [{type: String, enum: ['Sword', 'Club', 'Numchucks', 'Pick'], required: true, lowercase: true, uniqueness: true}],
	skills: [{type: String, enum: ['Wall climbing', 'Stealth', 'Bo Staff Skills', 'Numchucks Skill'], required: true, uniqueness: true, lowercase: true}],
	abilities: [{type: String, required: true, uniqueness: true, lowercase: true}],
	zombiesKilled: {type: Number, min: 0, default: 0}
});

module.exports = mongoose.model('Ninja', Ninja);