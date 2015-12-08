(function (root) {

  var CHANGE_EVENT = "change";
  var _tracks = [];
  var _recording = false;

  var TrackStore = root.TrackStore = $.extend({}, EventEmitter.prototype, {
    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

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
    },

    recording: function () {
      return _recording;
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case TrackConstants.TRACKS_RECEIVED:
          _tracks = payload.tracks;
          TrackStore.emit(CHANGE_EVENT);
          break;

        case TrackConstants.RECORDING_STARTED:
          _recording = true;
          TrackStore.emit(CHANGE_EVENT);
          break;

        case TrackConstants.RECORDING_STOPPED:
          _recording = false;
          TrackStore.emit(CHANGE_EVENT);
          break;
      }
    })

  });
})(this);
