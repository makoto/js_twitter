# js_twitter

Sample twitter app based on js.
This is just a sample app to practice how to organize javascript

## Lessons learnt

- View functions (which touches DOM) has to be executed after document is ready.

## List of Questions while building.

### pros and cons of Object creation methods

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
- Singleton (Tweets is already instantiated)

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
- Can create only instance methods.
- Constructor

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

    t = new Tweets3
    t.add("world")
    
- "collections" is completely private
- This is very bad: You try to create Singleton, but actually creating same new object every time you call Tweets3()


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

- Same as Tweets

vs

Tweets5 = (function(){
  var collections = [];
  return {
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
})();

- Singleton with private variables (collections)



