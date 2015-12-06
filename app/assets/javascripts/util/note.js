(function (root) {
  var AudioContext = window.AudioContext || window.webkitAudioContext;
  var ctx = new AudioContext();

  var Note = window.Note = function (freq) {
    var createOscillator = function (freq) {
      var osc = ctx.createOscillator();
      osc.type = ToneStore.toneOptions("oscType");
      osc.frequency.value = freq;
      osc.detune.value = 0;
      osc.start(ctx.currentTime);
      return osc;
    };

    var createGainNode = function () {
      var gainNode = ctx.createGain();
      gainNode.gain.value = 0;
      gainNode.connect(ctx.destination);
      return gainNode;
    };

    var createConvolver = function () {
      var buffer = ctx.createBuffer(2, 88200, 44100);
      var convolver = ctx.createConvolver();
      convolver.buffer = buffer;
      return convolver;
    };

    this.oscillatorNode = createOscillator(freq);
    this.gainNode = createGainNode();
    this.convolverNode = createConvolver();
    this.gainNode.connect(this.convolverNode);

    this.oscillatorNode.connect(this.gainNode);
    this.oscillatorNode.connect(this.convolverNode);
  };

  Note.prototype.start = function () {
    this.oscillatorNode.type = ToneStore.toneOptions("oscType");
    this.gainNode.gain.value = ToneStore.toneOptions("gain");
  };

  Note.prototype.stop = function () {
    this.gainNode.gain.value = 0;
  };
})(this);
