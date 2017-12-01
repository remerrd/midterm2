var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
  name: String,
  votes: {type:Number, default:0},
  selected: Number
});

mongoose.model('person',personSchema);

//collection of canidates
var persons = [];
persons.push({name:"Fred", votes:0, selected:0});
persons.push({name:"Bob", votes:2, selected:0});
persons.push({name:"Me", votes:1, selected:0});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/voter', function(req, res, next) {
  res.sendFile('voter.html', { root: 'public' });
});


router.get("/persons", function(req,res){
  console.log("in get persons");
  res.json(persons);
})

router.post("/persons",function(req,res,next){
  console.log("in post persons");
  console.log(req.body);
  var newPerson = req.body;

  persons.push(newPerson);

  res.json(newPerson);

})

module.exports = router;
