function DashboardView() {
  var $context = $("#dashboard")
  EventHandler.bind("added",function  () {
    console.log("dash")
    $context.text('# of tweets:' + Tweets.size())
  })
}
