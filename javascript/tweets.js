var Tweets = {
  collections:[]
}
Tweets.add = function (tweet) {
  this.collections.push(tweet);
  EventHandler.trigger("added");
}

Tweets.last = function () {
  return this.collections.slice(-1)[0];
}