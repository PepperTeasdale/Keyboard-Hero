window.ToneActions = {
  changeGain: function (val) {
    AppDispatcher.dispatch({
      actionType: ToneConstants.GAIN_CHANGED,
      val: val
    });
  },

  changeOsc: function (val) {
    AppDispatcher.dispatch({
      actionType: ToneConstants.OSC_CHANGED,
      val: val
    });
  },

  changeOctave: function (val) {
    AppDispatcher.dispatch({
      actionType: ToneConstants.OCTAVE_CHANGED,
      val: val
    });
  },

  setOctave: function(octave) {
    AppDispatcher.dispatch({
      actionType: ToneConstants.OCTAVE_SET,
      octave: octave
    });
  }
}
