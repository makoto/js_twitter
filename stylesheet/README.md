# js_twitter

Sample twitter app based on js.
This is just a sample app to practice how to organize javascript

## Lessons learnt

- View functions (which touches DOM) has to be executed after document is ready.

## List of Questions while building.

### pros and cons of various Object creation methods

    var Tweets1 = {
      collections:[]
    }
    Tweets.add = function (tweet) {
      this.collections.push(tweet);
      EventHandler.trigger("added");
    }
    Tweets1().add("hello")

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
- Constructor pattern
- This is a bit wired because calling "new" with "Tweets2", rather than "Tweets2()"

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

- Same as Tweets1, shorter

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

### Javascript object construction, the Mark's way


    ///////// SINGLETON /////////////

    Tweets = (function(){
  
      var this_is_private = 4;
  
      function thisIsPrivate(){}
  
      var obj = {
        somePublicMethod = function(){}
      }
  
      return obj;
    })();

    Tweets.somePublicMethod();


    ///////// Multiple objects /////////////

    Tweet = (function(){
  
      var this_is_private = 4;
  
      function thisIsPrivate(){}
  
      var klass = function(){
        // init here
      };
      klass.prototype = {
        somePublicMethod = function(){}
      };
  
      return klass;
    })();

    var tweet = new Tweet();
    tweet.somePublicMethod();

- Basically same as Tweets5 pattern.
- Can have private variables and methods
- function is only executed once.


