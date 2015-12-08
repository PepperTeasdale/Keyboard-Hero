var Recorder = React.createClass({
  getInitialState: function () {
    KeyStore.on("change", this.addNotes);
    return {
      isRecording: false,
      track: new Track({ name: "" })
    };
  },

  componentDidMount: function () {
    TrackStore.addChangeHandler(this._onChange);
  },

  componentWillUnmount: function () {
    TrackStore.addChangeHandler(this._onChange);
  },

  _onChange: function () {
    this.setState({ isRecording: TrackStore.recording() });
  },

  addNotes: function () {
    if (this.state.isRecording) {
      this.state.track.addNotes(KeyStore.all());
    }
  },

  startRecording: function () {
    this.state.track.startRecording();
  },

  stopRecording: function () {
    this.state.track.stopRecording();
  },

  play: function () {
    this.state.track.play();
  },

  render: function () {
    var className = (TrackStore.recording() ? " recording" : "")
    return (
      <div className="recorder">
        <button onClick={ this.startRecording }
          className={ "record-button recorder-button" + className }>
          ⬤
        </button>
        <button
          onClick={ this.stopRecording }
          className="recorder-button"
        >
          &#x2b1b;
        </button>
        <button
          onClick={ this.play }
          className="recorder-button"
        >
          ►
        </button>
        <SaveButton track={ this.state.track } />
      </div>
    );
  }
});
