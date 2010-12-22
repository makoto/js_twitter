Tweets = (function(){
  var collections = [];
  var tweets = {
    add: function (tweet) {
      collections.push(tweet);
      EventHandler.trigger("added");
    },
    last: function () {
      return collections.slice(-1)[0];
    },
    size: function () {
      return collections.length;
    }
  }
  return tweets;
})();