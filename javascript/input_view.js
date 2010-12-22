function InputView() {
  $("#header").find("#submit").click(function () {
    var tweet = $("#content").val();
    Tweets.add(tweet);
  });
}

