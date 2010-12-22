var EventHandler = {events:{}};
EventHandler.trigger = function(name) {
  var event = this.events[name]
  if (event) {
    for (var i=0; i < event.length; i++) {
      event[i]();
    };
  };
}
EventHandler.bind = function(name, callback) {
  if (!this.events[name]) {
    this.events[name] = [];
  };
  this.events[name].push(callback);
}

// Example bind
// EventHandler.bind("foo",function  () {
//   console.log("hello");
// })
