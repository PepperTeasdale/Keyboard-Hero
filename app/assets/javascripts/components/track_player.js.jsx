var TrackPlayer = React.createClass({
  play: function () {
    this.props.track.play();
  },

  delete: function () {
    TrackApiUtil.destroy(this.props.track.id);
  },

  render: function() {
    return (
      <div>
        <span>{this.props.track.name}</span>
        <button className="play" onClick={this.play}>Play</button>
        <button className="delete" onClick={this.delete}>Delete</button>
      </div>
    );
  }
});
