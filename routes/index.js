var express = require('express');
var router = express.Router();

//mongo db set up/connect
var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
  name: String,
  votes: {type:Number, default:0},
  selected: Number
});

var person = mongoose.model('person',personSchema);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: 'public' });
});

router.get('/voter', function(req, res, next) {
  res.sendFile('voter.html', { root: 'public' });
});


router.get("/persons", function(req,res){
  console.log("in get persons");

  person.find(function(err,persons){
    if (err) return next(err);
    res.json(persons);
    console.log("Got persons from db");
  })
})

router.post("/persons",function(req,res,next){
  console.log("in post persons");
  console.log(req.body);

  var newPerson = new person(req.body);

  newPerson.save(function(err,person){
    if (err) return next(err);
    res.json(person);
    console.log("Posted to DB");
    console.log(person);
  })
})

router.param('person',function(req,res,next,id){
  var query = person.findById(id);

  query.exec(function (err, person){
    if (err) return next(err);
    if (!person) return next("No person in database!");

    req.person = person;
    return next();
  })
})

router.get('/persons/:person', function(req,res){
  res.json(req.person);
})

router.put('/persons/:person/upvote', function(req,res,next){
  console.log("Vote recieved for ");
  console.log(req.person.name);
  req.person.upvote(function(err,person){
    if(err) return next(err);
    res.json(person);
  })
})


module.exports = router;
