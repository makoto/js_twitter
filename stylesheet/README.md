# js_twitter

Sample twitter app based on js.


## List of Questions while building.

- pros and cons of Object layout

  var Tweets = {
    collections:[]
  }
  Tweets.add = function (tweet) {
    this.collections.push(tweet);
    EventHandler.trigger("added");
  }
  Tweets().add("hello")
  
vs

  function Tweets2(){
    this.collections = [];
  }
  Tweets2.prototype = []
  Tweets2.prototype.add = function (tweet) {
    this.collections.push(tweet);
    EventHandler.trigger("added");
  }  
  tweets2 = new Tweets2
  tweets2.add("hello")
  
vs

  function Tweets3(){
    var collections = [];
    return {
      add:function (tweet) {
        collections.push(tweet);
        EventHandler.trigger("added");
      }
    }
  }
  Tweets3().add("hello")
