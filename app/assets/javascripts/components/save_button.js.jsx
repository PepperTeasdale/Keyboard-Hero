var SaveButton = React.createClass({
  getInitialState: function () {
    return { title: "" };
  },

  changeText: function (e) {
    e.stopPropagation();
    this.setState({ title: e.target.value });
  },

  save: function (e) {
    e.preventDefault();
    this.props.track.name = this.state.title;
    this.props.track.saveTrack();
    this.setState({ title: "" });
  },

  render: function () {
    return (
      <div>
        <input
          type="text"
          value={this.state.title}
          onFocus={Listener.turnOff}
          onBlur={Listener.turnOn}
          onChange={this.changeText}
        />
        <button onClick={this.save}>Save</button>
      </div>
    );
  }

});
