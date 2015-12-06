(function(root) {
  'use strict';

  var CHANGE_EVENT = "change";
  var _toneOptions = {
    oscType: "square",
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
      }
    })
  });
}(this));
