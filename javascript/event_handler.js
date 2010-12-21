var EventHandler = {events:{}};
EventHandler.trigger = function(name) {
  if (event = this.events[name]) {
    event();
  };
}
EventHandler.bind = function(name, callback) {
  this.events[name] = callback;
}

// Example bind
// EventHandler.bind("foo",function  () {
//   console.log("hello");
// })
