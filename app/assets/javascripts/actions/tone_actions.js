window.ToneActions = {
  changeGain: function (val) {
    AppDispatcher.dispatch({
      actionType: ToneConstants.GAIN_CHANGED,
      val: val
    });
  }
}
