window.TrackActions = {
  tracksReceived: function (tracks) {
    AppDispatcher.dispatch({
      actionType: TrackConstants.TRACKS_RECEIVED,
      tracks: tracks
    });
  }
};
