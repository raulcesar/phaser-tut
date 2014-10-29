//This is the brick laying state.

var laybricks = {

	preload: function() {
		
	},

	create: function() {
		this.brickpile = game.add.sprite(game.world.centerX, game.world.centerY, 'brickpile');
		this.brickpile.inputEnabled = true;
		this.brickpile.input.enableDrag(false, true, false);
	},

	update: function() {

	}

};