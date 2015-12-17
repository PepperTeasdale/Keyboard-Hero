(function(root) {
  'use strict';

  var CHANGE_EVENT = "change";

  var _oscTypeIdx = 0;
  var _oscTypes = ["sine", "square", "sawtooth", "triangle"];

  var _toneOptions = {
    oscType: _oscTypes[_oscTypeIdx],
    gain: 0.3,
    octave: 4
  };

  root.ToneStore = $.extend({}, EventEmitter.prototype, {
    toneOptions: function (parameter) {
      return _toneOptions[parameter];
    },

    changeGain: function (val) {
      var newVal = _toneOptions.gain + val;
      if (newVal < 0) { newVal = 0 };
      if (newVal > 1.1) { newVal = 1.1 };
      _toneOptions.gain = newVal;
    },

    changeOsc: function (val) {
      _oscTypeIdx = (_oscTypeIdx + val) % 4;
      if (_oscTypeIdx < 0) { _oscTypeIdx = 4 + _oscTypeIdx; }
      _toneOptions.oscType = _oscTypes[_oscTypeIdx];
    },

    changeOctave: function (val) {
      var octave = _toneOptions.octave;
      octave += val;
      if (octave < 3) {
        octave = 3;
      } else if (octave > 5) {
        octave = 5;
      }
      _toneOptions.octave = octave;
    },

    updateKeyMappings: function () {
      var counter = 0;
      for (var key in window.KEY_MAPPING) {
        var octave = (counter < 12 ? _toneOptions.octave : _toneOptions.octave + 1);
        KEY_MAPPING[key] = KEY_MAPPING[key].replace(/\d/, octave);
        counter += 1;
      }
    },

    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case ToneConstants.GAIN_CHANGED:
          ToneStore.changeGain(payload.val);
          ToneStore.emit(CHANGE_EVENT);
          break;

        case ToneConstants.OSC_CHANGED:
          ToneStore.changeOsc(payload.val);
          ToneStore.emit(CHANGE_EVENT);
          break;

        case ToneConstants.OCTAVE_CHANGED:
          ToneStore.changeOctave(payload.val);
          ToneStore.updateKeyMappings();
          ToneStore.emit(CHANGE_EVENT);
          break;

        case ToneConstants.OCTAVE_SET:
          _toneOptions.octave = payload.octave;
          ToneStore.updateKeyMappings();
          ToneStore.emit(CHANGE_EVENT);
      }
    })
  });
}(this));
