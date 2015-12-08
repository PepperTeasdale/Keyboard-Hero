var Key = React.createClass({
  getInitialState: function () {
    return {
      active: false,
      noteName: this.props.noteName
    };
  },

  componentDidMount: function () {
    this.setNote(window.TONES[this.state.noteName]);
  },

  componentWillReceiveProps: function (nextProps) {
    this.setState({ noteName: nextProps.noteName });
    KeyStore.removeChangeHandler(this.keyChanged);
    this.setNote(window.TONES[nextProps.noteName]);
  },

  setNote: function (freq) {
    this.note = new Note(freq);
    KeyStore.addChangeHandler(this.keyChanged);
    if (KeyStore.all().indexOf( this.state.noteName) !== -1 ) {
      this.note.start();
      this.setState({ active: true });
    }
  },

  keyChanged: function () {
    if (KeyStore.all().indexOf( this.state.noteName) !== -1 ) {
      this.note.start();
      this.setState({ active: true });
    } else {
      this.note.stop();
      this.setState({ active: false });
    }
  },

  render: function () {
    var className = "";
    if (this.state.active) {
      className += " active";
    }

    if (this.props.noteName[1] === "b") {
      className += " black";
    }

    return (
      <div className={"key-container" + className}>
        <div className={"key" + className}></div>
      </div>
    );
  }
});
