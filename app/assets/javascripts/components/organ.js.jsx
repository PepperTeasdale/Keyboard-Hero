var Organ = React.createClass({
  render: function () {
    var keys = [];

    for (var tone in window.TONES) {
      keys.push(
        <li key={tone}>
          <Key noteName={tone} />
        </li>
      );
    }

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
