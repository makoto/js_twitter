function StatusView() {
  var $context = $("#status")
  
  EventHandler.bind("added",function  (tweet) {
    console.log("Just tweeted " + tweet);
    $context.append(tweet);
  })
}


