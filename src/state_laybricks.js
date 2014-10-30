//This is the brick laying state.
var laybricks = {
	
	// var brickSpriteSize
	// var cornerBrickDetals = {width:, height: }

	preload: function() {
		
	},

	create: function() {

		this.brickAnchorSize = new Size2D(114, 59),
		this.brickOffsetDelta = new Size2D(
			brickAnchorSize.width + game.cache.getImage('brick').width, 
			brickAnchorSize.height + game.cache.getImage('brick').height, );

		this.brickpile = game.add.sprite(game.world.centerX, game.world.centerY, 'brick');
		this.brickpile.inputEnabled = true;
		this.brickpile.input.enableDrag(false, true, false);

		this.brick2 = game.add.sprite(game.world.centerX, game.world.centerY, 'brick');
	},

	update: function() {

	},

	setupTargetGrid: function() {
		//we will build a grid of 114x59
		// 1) Find maximum number of bricks.
	}
};

