(function(root) {
  'use strict';

  root.OscButtons = React.createClass({
    getInitialState: function () {
      return ({ oscType: ToneStore.toneOptions("oscType") });
    },

    componentDidMount: function () {
      ToneStore.addChangeHandler(this._onChange);
    },

    componentWillUnmount: function () {
      ToneStore.removeChangeHandler(this._onChange);
    },

    _onChange: function () {
      this.setState({ oscType: ToneStore.toneOptions("oscType") });
    },

    indexUp: function () {
      KeyActions.stopAllNotes();
      ToneActions.changeOsc(1);
    },

    indexDown: function () {
      KeyActions.stopAllNotes();
      ToneActions.changeOsc(-1);
    },

    render: function () {
      return (
        <div className="keyboard-options">
          <ul className="osc-options">
            <li><h2>OSC</h2></li>
            <li>
              <button onClick={ this.indexUp }>▲</button>
            </li>
            <li>
              <h3>{ this.state.oscType }</h3>
            </li>
            <li>
              <button onClick={ this.indexDown }>▼</button>
            </li>
          </ul>
        </div>
      )
    }
  })
}(this));
