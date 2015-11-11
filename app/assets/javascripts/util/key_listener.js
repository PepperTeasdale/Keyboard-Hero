$(document).on("keyup", function (event) {
  var keyPress = String.fromCharCode(event.keyCode);
  var note = KEY_MAPPING[keyPress] + "4";
  KeyActions.keyUnpressed(note);
});

$(document).on("keydown", function (event) {

  var keyPress = String.fromCharCode(event.keyCode);
  var note = KEY_MAPPING[keyPress] + "4";
  KeyActions.keyPressed(note);
});
