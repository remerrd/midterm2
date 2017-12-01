var mongoose = require('mongoose');

var personSchema = new mongoose.Schema({
  name: String,
  votes: {type:Number, default:0},
  selected: Number
});
personSchema.methods.upvote = function(current){
    this.votes += 1;
    this.save(current);
}

mongoose.model('person',personSchema);