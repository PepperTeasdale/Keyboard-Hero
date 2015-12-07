
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

    dispatcherID: AppDispatcher.register(function (payload) {
      switch (payload.eventType) {
        case 'CREATE_NOTE':
          KeyStore.addNote(payload.noteName);
          KeyStore.emit('change');
          break;

        case 'REMOVE_NOTE':
          KeyStore.removeNote(payload.noteName);
          KeyStore.emit('change');
          break;
      }
    })
  });

  root.KeyStore.setMaxListeners(30);
})(this);
