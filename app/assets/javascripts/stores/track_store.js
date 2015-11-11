(function (root) {
  var _tracks = [];

  var TrackStore = root.TrackStore = $.extend({}, EventEmitter.prototype, {
    addTrack: function (track) {
      _tracks.push(track);
      this.emit("change");
    },

    all: function () {
      return _tracks;
    },

    destroy: function (track) {
      _tracks.splice(_tracks.indexOf(track), 1);
      this.emit("change");
    }

  });
})(this);
