window.GainButtons = React.createClass({
  getInitialState: function () {
    return ({
      gain: ToneStore.toneOptions("gain"),
    });
  },

  componentDidMount: function () {
    ToneStore.addChangeHandler(this._onChange);
  },

  componentWillUnmount: function () {
    ToneStore.removeChangeHandler(this._onChange);
  },

  _onChange: function () {
    this.setState({ gain: ToneStore.toneOptions("gain") });
  },

  raiseGain: function () {
    ToneActions.changeGain(.1);
  },

  lowerGain: function () {
    ToneActions.changeGain(-.1)
  },

  render: function () {
    return (
      <div className="keyboard-options group">
        <ul className="gain-options">
          <li><h2>GAIN</h2></li>
          <li>
            <button onClick={ this.raiseGain }>▲</button>
          </li>
          <li>
            <h3>{ Math.round(this.state.gain * 10) }</h3>
          </li>
          <li>
            <button onClick={ this.lowerGain }>▼</button>
          </li>
        </ul>
      </div>
    );
  }
});
