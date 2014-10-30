//This is the brick laying state.
var laybricks = {
	
	// var brickSpriteSize
	// var cornerBrickDetals = {width:, height: }

	preload: function() {
		
	},

	create: function() {
		this.brickActualSize = new Sized2D(game.cache.getImage('brick').width, game.cache.getImage('brick').height);
		this.brickAnchorSize = new Size2D(114, 59),

		// this.brickOffsetDelta = new Size2D(
		// 	brickActualSize.width - brickAnchorSize.width , 
		// 	brickActualSize.height - brickAnchorSize.height);
		this.brickWell = new BrickWell(this.brickAnchorSize, this.brickActualSize);
		


		this.brickpile = game.add.sprite(game.world.centerX, game.world.centerY, 'brick');
		this.brickpile.inputEnabled = true;
		this.brickpile.input.enableDrag(false, true, false);

		this.brick2 = game.add.sprite(game.world.centerX, game.world.centerY, 'brick');
	},

	update: function() {

	},

	setupTargetGrid: function() {
		/**
		 * we will build a grid of brickAnchorSize tiles.
		 *
		 * 1) Find maximum number of bricks.
		 * 2) Find starting point, by centering.
		 */
		
		//Find total width of a well row.
		var totalSize = game.world.width - this.brickOffsetDelta.width;
		var bricksPerRow = totalSize = Math.floor(totalSize/this.brickAnchorSize);
		var brickWellWidth = (bricksPerRow * this.brickAnchorSize.width) + this.brickOffsetDelta.width;


		//Find center.
		var brickWellX = Math.floor((game.world.width - brickWellWidth) / 2);

		this.brickWell = new BrickWell(this.brickAnchorSize, this.brickActualSize, bricksPerRow, brickWellX);

		//Place rows.
		//We will not use physics to determine colision with the brickwell. Instead, we will check if the 
		//mouse position is within a rectangle.





		
	}
};

