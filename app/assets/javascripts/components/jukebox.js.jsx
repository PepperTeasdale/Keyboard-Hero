var Jukebox = React.createClass({
  getInitialState: function () {
    TrackStore.on("change", this.updateTracks);
    return { tracks: TrackStore.all() };
  },

  updateTracks: function () {
    this.setState({ tracks: TrackStore.all() });
  },

  componentDidMount: function () {
    TrackApiUtil.fetch();
    TrackStore.addChangeHandler(this._onChange);
  },

  componentWillUnmount: function () {
    TrackStore.removeChangeHandler(this._onChange);
  },

  _onChange: function () {
    this.setState({ tracks: TrackStore.all() });
  },

  render: function () {
    var tracks = this.state.tracks.map(function (track) {
      return (
        <TrackPlayer track={ track } key={ track.id } />
      );
    });

    return (
      <div className="jukebox">
        <h1>Jukebox</h1>
        <ul className="playlist">
          <li className="group">
            <span>Title</span>
          </li>
          { tracks }
        </ul>
      </div>
    );
  }
});
