var BrickWell = function(brickSpotSize, brickActualSize) {
	this.brickSpotSize = brickSpotSize;
	this.yOffset = 0;

	// this.brickActualSize = new Sized2D(game.cache.getImage('brick').width, game.cache.getImage('brick').height);

	// this.brickAnchorSize = new Size2D(114, 59),
	this.brickOffsetDelta = new Size2D(
		brickActualSize.width - brickAnchorSize.width , 
		brickActualSize.height - brickAnchorSize.height);


	//Find total width of a well row.
	var totalSize = game.world.width - this.brickOffsetDelta.width;
	var bricksPerRow = Math.floor(totalSize/this.brickAnchorSize);
	var brickWellWidth = (bricksPerRow * this.brickAnchorSize.width) + this.brickOffsetDelta.width;


	//Find center.
	this.brickWellX = Math.floor((game.world.width - brickWellWidth) / 2);

	this.createRow();
}

BrickWell.prototype = {
	moveUp: function() {
		this.yOffset += brickSpotSize.height;
		this.createRow();
	}

	createRow: function() {
		//Because these are just placeholders, we can destroy any that already exist.
		this.brickSpots = new Array(bricksPerRow);

		//Phaser uses 0,0 = top left, so we need to calculate initial y position.
		var currentRowY = game.world.height - brickActualSize + (brickOffsetDelta.height * yOffset);
		for (var i = 0; i < brickSpots.length; i++) {
			brickSpots[i] = new Phaser.Rectangle(this.brickWellX + (0 * brickSpotSize.width), currentRowY, width, height)
		};
	}


}