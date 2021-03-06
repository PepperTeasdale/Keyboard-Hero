window.TrackActions = {
  tracksReceived: function (tracks) {
    AppDispatcher.dispatch({
      actionType: TrackConstants.TRACKS_RECEIVED,
      tracks: tracks
    });
  },

  startRecording: function () {
    AppDispatcher.dispatch({
      actionType: TrackConstants.RECORDING_STARTED
    });
  },

  stopRecording: function () {
    AppDispatcher.dispatch({
      actionType: TrackConstants.RECORDING_STOPPED
    });
  },

  destroy: function (trackId) {
    AppDispatcher.dispatch({
      actionType: TrackConstants.TRACK_DELETED,
      trackId: trackId
    })
  }
};
