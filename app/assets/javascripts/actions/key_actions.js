window.KeyActions = {
  keyPressed: function (key) {
    AppDispatcher.dispatch({
      eventType: "KEY_DOWN",
      noteName: key
    });
  },

  keyUnpressed: function (key) {
    AppDispatcher.dispatch({
      eventType: "KEY_UP",
      noteName: key
    });
  }
};
