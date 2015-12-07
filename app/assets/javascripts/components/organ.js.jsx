var Organ = React.createClass({
  getInitialState: function () {
    return ({ octave: ToneStore.toneOptions("octave") });
  },

  componentDidMount: function () {
    ToneStore.addChangeHandler(this._onChange);
  },

  componentWillUnmount: function () {
    ToneStore.removeChangeHandler(this._onChange);
  },

  _onChange: function () {
    this.setState({ octave: ToneStore.toneOptions("octave") });
  },

  render: function () {
    var keys = [];
    var notes = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab',
                 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E']

    notes.forEach(function (note, idx) {
      var currentOctave = this.state.octave;
      var octave = (idx < 12 ? currentOctave : currentOctave + 1)
      keys.push(
        <li key={ idx }>
          <Key noteName={ note + octave } />
        </li>
      );
    }.bind(this));

    return (
      <div>
        <ul className="keyboard group">
          <ul className="options-list group">
            <li><GainButtons /></li>
            <li><OscButtons /></li>
          </ul>
          { keys }
        </ul>
        <Recorder />
        <Jukebox />
      </div>
    );
  }
});
