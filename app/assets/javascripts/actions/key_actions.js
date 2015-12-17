window.KeyActions = {
  keyPressed: function (key) {
    AppDispatcher.dispatch({
      eventType: KeyConstants.KEY_DOWN,
      noteName: key
    });
  },

  keyUnpressed: function (key) {
    AppDispatcher.dispatch({
      eventType: KeyConstants.KEY_UP,
      noteName: key
    });
  },

  stopAllNotes: function () {
    AppDispatcher.dispatch({
      eventType: KeyConstants.STOP_ALL_NOTES
    });
  }
};
