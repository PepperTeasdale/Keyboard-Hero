var Key = React.createClass({
  getInitialState: function () {
    return {active: false};
  },

  componentDidMount: function () {
    this.note = new Note(window.TONES[this.props.noteName]);
    KeyStore.on("change", this.keyChanged);
    if (KeyStore.all().indexOf( this.props.noteName) !== -1 ) {
      note.start();
      this.setState({active: true});
    }
  },

  keyChanged: function () {
    if (KeyStore.all().indexOf( this.props.noteName) !== -1 ) {
      this.note.start();
      this.setState({active: true});
    } else {
      this.note.stop();
      this.setState({active: false});
    }
  },

  render: function () {
    var className = "key";
    if (this.state.active) {
      className += " active";
    }

    if (this.props.noteName[1] === "b") {
      className += " black";
    }

    return (
      <div className={className}>{this.props.noteName}</div>
    );
  }
});
