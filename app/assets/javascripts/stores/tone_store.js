(function(root) {
  'use strict';

  var CHANGE_EVENT = "change";

  var _oscTypeIdx = 0;
  var _oscTypes = ["sine", "square", "sawtooth", "triangle"];

  var _toneOptions = {
    oscType: _oscTypes[_oscTypeIdx],
    gain: 0.3
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
      }
    })
  });
}(this));
