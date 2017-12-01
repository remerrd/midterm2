var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
  name: String,
  votes: {type:Number, default:0},
  selected: Number
});

var person = mongoose.model('person',personSchema);

personSchema.methods.upvote = function(current){
    this.votes += 1;
    this.save(current);
}