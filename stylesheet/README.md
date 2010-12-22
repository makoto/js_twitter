# js_twitter

Sample twitter app based on js.


## List of Questions while building.

### pros and cons of Object layout

    var Tweets = {
      collections:[]
    }
    Tweets.add = function (tweet) {
      this.collections.push(tweet);
      EventHandler.trigger("added");
    }
    Tweets().add("hello")

- Does NOT raise error if event_handler.js is not included before tweets.js
- "collections" is public 

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

- Need to instantiate all the time.

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
    
- "collections" is completely private

vs

    var Tweets4 = {
      collections:[],

      add: function (tweet) {
        this.collections.push(tweet);
        EventHandler.trigger("added");
      },

      last: function () {
        return this.collections.slice(-1)[0];
      }
    }
    Tweets.add("hello")

- Raises error if event_handler.js is not included before tweets.js