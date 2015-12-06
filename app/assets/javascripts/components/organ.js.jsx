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
          <li><GainButtons /></li>
          { keys }
        </ul>
        <Recorder />
        <Jukebox />
      </div>
    );
  }
});
