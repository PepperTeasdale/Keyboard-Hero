var Track = window.Track = function (attrs) {
  this.name = attrs.name;
  this.roll = attrs.roll || [];
  this.octave = null;
};

Track.prototype.startRecording = function () {
  this.roll = [];
  this.octave = ToneStore.toneOptions("octave");
  this.startTime = Date.now();
  TrackActions.startRecording();
};

Track.prototype.addNotes = function (notes) {
  this.roll.push({
    time: Date.now() - this.startTime,
    notes: notes
  });
};

Track.prototype.saveTrack = function () {
  TrackApiUtil.saveTrack(this);
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);
  TrackActions.stopRecording();
};

Track.prototype.play = function () {
  if (this.interval) {
    return;
  }

  var playbackStartTime = Date.now();
  var currentNote = 0;

  this.intervalId = setInterval(function () {
    if (currentNote < this.roll.length - 1) {
      if (Date.now() - playbackStartTime >= this.roll[currentNote].time) {
        if (currentNote > 0) {
          KeyActions.keyUnpressed(this.roll[currentNote - 1].notes);
        }
        KeyActions.keyPressed(this.roll[currentNote].notes);
        currentNote += 1;
      }
    } else {
      clearInterval(this.intervalId);
      delete this.intervalId;
    }
  }.bind(this), 1);

};
