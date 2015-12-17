(function(root) {
  var Listener = root.Listener = {};

  Listener.handleKeyUp = function (event) {
    if (event.keyCode === 88) {
      KeyActions.stopAllNotes();
      ToneActions.changeOctave(1);
    } else if (event.keyCode === 90) {
      KeyActions.stopAllNotes();
      ToneActions.changeOctave(-1);
    } else {
      makeKeyHandler("keyUnpressed")(event);
    }
  };

  Listener.handleKeyDown = function (event) {
    makeKeyHandler("keyPressed")(event);
  };

  var makeKeyHandler = function (action) {
    return function (event) {
      if (event.keyCode === 186) {
        event.keyCode = 59;
      }
      var keyPress = String.fromCharCode(event.keyCode);
      var note = KEY_MAPPING[keyPress];
      KeyActions[action](note);
    };
  };

  Listener.turnOn = function () {
    $(document).on("keyup", Listener.handleKeyUp);
    $(document).on("keydown", Listener.handleKeyDown);
  };

  Listener.turnOff = function () {
    $(document).off("keyup", Listener.handleKeyUp);
    $(document).off("keydown", Listener.handleKeyDown);
  };

  Listener.turnOn();
})(this);
