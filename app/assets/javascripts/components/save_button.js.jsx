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
    this.props.save(this.state.title);
    this.setState({ title: "" });
  },

  render: function () {
    return (
      <form>
        <input type="text" value={this.state.title} onChange={this.changeText} />
        <button onClick={this.save}>Save</button>
      </form>
    );
  }

});
