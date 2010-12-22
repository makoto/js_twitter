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
  console.log(name);
  // var event = this.events[name]
  if (!this.events[name]) {
    this.events[name] = [];
  };
  this.events[name].push(callback);
  console.log(this.events);
}

// Example bind
// EventHandler.bind("foo",function  () {
//   console.log("hello");
// })
