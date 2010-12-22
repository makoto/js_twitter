function InputView() {
  $("#header").find("#submit").click(function () {
    var tweet = $("#content").val();
    console.log("bbb");
    Tweets.add(tweet);
  });
}

