var loadState = {

	preload: function() {
		//TODO: later remember to put in progress bar.

		//Load brick:
		game.load.image('brickpile', 'assets/brickortho.png');

	},

	create: function() {
		game.state.start('laybricks');
	},

	update: function() {

	}

};