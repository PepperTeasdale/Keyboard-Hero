window.KeyActions = {
  keyPressed: function (key) {
    AppDispatcher.dispatch({
      eventType: "CREATE_NOTE",
      noteName: key
    });
  },

  keyUnpressed: function (key) {
    AppDispatcher.dispatch({
      eventType: "REMOVE_NOTE",
      noteName: key
    });
  }
};
