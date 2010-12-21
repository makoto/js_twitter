var StatusView = {}
EventHandler.bind("added",function  () {
  var tweet = Tweets.last();
  console.log("Just tweeted " + tweet);
})