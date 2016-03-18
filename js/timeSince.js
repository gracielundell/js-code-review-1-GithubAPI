var timeSince = function(time) {
  this.Time = time;
};

timeSince.prototype.getTime = function() {
  return this.Time;
};

exports.timeSince = timeSince;
