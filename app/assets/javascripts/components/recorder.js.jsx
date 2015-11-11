var Recorder = React.createClass({
  getInitialState: function () {
    KeyStore.on("change", this.addNotes);
    return {
      isRecording: false,
      track: new Track({name: ""})
    };
  },

  addNotes: function () {
    if (this.state.isRecording) {
      this.state.track.addNotes.bind(this.state.track)(KeyStore.all());
    }
  },

  startRecording: function () {
    this.setState({isRecording: true});
    this.state.track.startRecording();
  },

  stopRecording: function () {
    this.state.track.stopRecording();
    this.setState({isRecording: false});
  },

  play: function () {
    this.state.track.play();
  },

  save: function (title) {
    this.state.track.name = title;
    TrackStore.addTrack(this.state.track);
  },

  render: function () {
    return (
      <div>
        <button onClick={this.startRecording}>Start Recording</button>
        <button onClick={this.stopRecording}>Stop Recording</button>
        <button onClick={this.play}>Play</button>
        <SaveButton save={this.save} />
      </div>
    );
  }
});
