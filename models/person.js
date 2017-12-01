personSchema.methods.upvote = function(current){
    this.votes += 1;
    this.save(current);
}