function StatusView() {
  var $context = $("#status")
  
  EventHandler.bind("added",function  () {
    var tweet = Tweets.last();
    console.log("Just tweeted " + tweet);
    $context.append(tweet);
  })
}
