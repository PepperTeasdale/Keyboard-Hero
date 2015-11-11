var Jukebox = React.createClass({
  getInitialState: function () {
    TrackStore.on("change", this.updateTracks);
    return { tracks: TrackStore.all() };
  },

  updateTracks: function () {
    this.setState({ tracks: TrackStore.all() });
  },

  render: function () {
    var tracks = this.state.tracks.map(function (track, idx) {
      return (
        <li key={track.id}>
          <TrackPlayer track={track} />
        </li>
      );
    });

    return (
      <ul className="jukebox">
        {tracks}
      </ul>
    );
  }
});
