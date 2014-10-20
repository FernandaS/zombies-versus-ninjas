"use strict";
var express = require('express');
var mongo = require('mongo');
var mongoose = require('mongoose');
var port = 8888;
var app = express();
mongoose.connect('mongodb://localhost/ninjaZombies');

var Ninja = require('./lib/models/ninja');
var Zombie = require('./lib/models/zombie');

//zombie
var jimmy = new Zombie({name: 'Rotting Jimmy', health: 30, ninjasKilled: 1});
jimmy.save();

var timbo = new Zombie({name: 'timbo', health: 20, ninjasKilled: 30});

//ninjas

var ninja1 = new Ninja({name: 'Secret', health: 300, weapons: ['Sword', 'Club'], skills: ['Wall climbing'], abilities: ['Whatever'], zombiesKilled: 400})

var ninja2 = new Ninja({name: 'Kumato', health: 233, weapons: ['Sword'], skills: ['Wall climbing'], abilities: ['Killing things'], zombiesKilled: 647})

jimmy.save();
timbo.save();
ninja1.save();
ninja2.save();

app.get('/zombies', function(req, res){
	Zombie.find().exec(function(err, zombies){
		res.send(zombies);
	});
});

app.get('/ninjas', function(req, res){
	Ninja.find().exec(function(err, ninjas){
		if(err){
			res.send(err);
		} else{
			res.send(ninjas);
		}
	})
})

app.listen(port, function(){
	console.log("listening on port " + port)
})