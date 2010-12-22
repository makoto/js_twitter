# js_twitter

Sample twitter app based on js.
This is just a sample app to practice how to organize javascript

## Functionality

- You type what you did.
- When tweet is submitted, it updates status.
- It also increases number of tweets at dashboard.
- Currently the data is all in memory.

## The approach

- "Tweet" model contains list of tweets.
- When a tweet is added, Model tells custom event handler to trigger a event 

    EventHandler.trigger("added");

- Status/Dashboard views binds actions for "added" event.

    EventHandler.bind("added",function(){...})

- InputView binds to DOM element so that it calls model on jQuery "click" event.

    Tweets.add(tweet);

- EventHandler is just a hash of arrays. 

## 

## Lessons learnt: Object construction

[js-model](https://github.com/benpickles/js-model) provides a lot of way for object construction and event handling, but I thought I will implement something basic by myself. One thing I got confused a most is a various way to handle object construction. 


### pros and cons of various Object creation methods

    var Tweets1 = {
      collections:[]
    }
    Tweets.add = function (tweet) {
      this.collections.push(tweet);
      EventHandler.trigger("added");
    }
    Tweets1().add("hello")

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
- Can create only instance methods (via prototype).
- Constructor pattern.
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

## What's next ?

- How to combine this with [Sammy](http://code.quirkey.com/sammy/) like RESFTful paradigm and template systems.
- How to handle persistency (again, js-model does provide a lot on this)


