var TrackApiUtil = window.TrackApiUtil = {
  fetch: function () {
    $.ajax({
      url: '/api/tracks',
      type: 'GET',
      dataType: 'json',
      success: function(tracks) {
        TrackActions.tracksReceived(tracks)
      }
    });
  },

  saveTrack: function (track) {
    var trackObj = { track: { name: track.name, roll: JSON.stringify(track.roll) } };


    $.ajax({
      url: '/api/tracks',
      type: 'POST',
      dataType: 'json',
      data: trackObj,
      success: function(track) {
        TrackStore.addTrack(track);
      },
      error: function (data) {
      }
    });
  },

  destroy: function (track_id) {
    $.ajax({
      url: '/api/tracks/' + track_id,
      type: 'DELETE',
      dataType: 'json',
      success: function () {
        TrackStore.destroy(track_id);
      }
    });
  }
};
