function DashboardView() {
  var $context = $("#dashboard")
  EventHandler.bind("added",function  () {
    $context.text('# of tweets:' + Tweets.size())
  })
}
