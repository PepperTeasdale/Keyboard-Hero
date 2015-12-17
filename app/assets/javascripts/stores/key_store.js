
(function (root) {
  var CHANGE_EVENT = "change";
  var _keys = [];

  root.KeyStore = $.extend({}, EventEmitter.prototype, {
    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    all: function() {
      return _keys.slice();
    },

    addNote: function (note) {
      _keys = _keys.concat(note);
    },

    removeNote: function (note) {
      note = [note].reduce(function (a, b) { return a.concat(b); }, []);
      note.forEach(function (note) {
        _keys = _keys.filter(function (key) {return key !== note;});
      }.bind(this));
    },

    removeAllNotes: function () {
      _keys = [];
    },

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.eventType) {
        case KeyConstants.KEY_DOWN:
          KeyStore.addNote(payload.noteName);
          KeyStore.emit(CHANGE_EVENT);
          break;

        case KeyConstants.KEY_UP:
          KeyStore.removeNote(payload.noteName);
          KeyStore.emit(CHANGE_EVENT);
          break;

        case KeyConstants.STOP_ALL_NOTES:
          KeyStore.removeAllNotes();
          KeyStore.emit(CHANGE_EVENT);
      }
    })
  });

  root.KeyStore.setMaxListeners(30);
})(this);
