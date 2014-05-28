// Multiple LEDs
// modified code from
// http://node-ardx.org/exercises/2


var five = require("johnny-five"),
	leds=[],
	ledPins = [2,3,4,5,6,7,8,9],
	myBoard = new five.Board(),
	multiplier = 500;


myBoard.on("ready", function() {

	// initialize LEDs using a for loop
	for (var i = 0; i < ledPins.length; i++){
		var myLed = new five.Led(ledPins[i]);
		leds.push(myLed);
	}



	function oneAfterAnother() {
		var delay = 0;
		board.counter = 0;

		for (var i = 0; i < leds.length; i++) {

			board.wait(delay, function () {
				// console.log(this.counter + " on");
				leds[this.counter].on();
			});

			board.wait(delay + multiplier, function () {
				// console.log(this.counter + " off");
				leds[this.counter].off();
				this.counter = (this.counter + 1) % leds.length;
			});

			delay += multiplier;
		}
	}

	oneAfterAnother();
	board.loop(multiplier * leds.length, oneAfterAnother);
});
