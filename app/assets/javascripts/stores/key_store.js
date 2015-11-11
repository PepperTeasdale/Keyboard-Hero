
(function (root) {
  var _keys = [];

  root.KeyStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _keys.slice();
    },

    addNote: function (note) {
      _keys = _keys.concat(note);

      // .filter(function (e, i, arr) {
      //   return arr.lastIndexOf(e) === i;
      // });
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
