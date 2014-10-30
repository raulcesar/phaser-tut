var BrickWell = function(brickAnchorSize, brickActualSize) {
	this.brickAnchorSize = brickAnchorSize;
	this.brickActualSize = brickActualSize;
	this.yOffset = 0;

	// this.brickActualSize = new Sized2D(game.cache.getImage('brick').width, game.cache.getImage('brick').height);

	// this.brickAnchorSize = new Size2D(114, 59),
	this.brickOffsetDelta = new Size2D(
		brickActualSize.width - brickAnchorSize.width , 
		brickActualSize.height - brickAnchorSize.height);


	//Find total width of a well row.
	var totalSize = game.world.width - this.brickOffsetDelta.width;
	this.bricksPerRow = Math.floor(totalSize/this.brickAnchorSize.width);
	
	var brickWellWidth = (this.bricksPerRow * this.brickAnchorSize.width) + this.brickOffsetDelta.width;

	//Find center.
	this.brickWellX = Math.floor((game.world.width - brickWellWidth) / 2);

	this.createRow();
}

BrickWell.prototype = {
	moveUp: function() {
		this.yOffset += brickAnchorSize.height;
		this.createRow();
	},

	createRow: function() {
		//Because these are just placeholders, we can destroy any that already exist.
		this.brickSpots = new Array(this.bricksPerRow);

		//Phaser uses 0,0 = top left, so we need to calculate initial y position.
		var currentRowY = game.world.height - this.brickActualSize + (this.brickOffsetDelta.height * this.yOffset);


		for (var i = 0; i < this.brickSpots.length; i++) {
			this.brickSpots[i] = new Phaser.Rectangle(
				this.brickWellX + (i * this.brickAnchorSize.width), 
				currentRowY, 
				this.brickAnchorSize.width, 
				this.brickAnchorSize.height);
		};
	},

	getDropedOnRect: function(point) {
		for (var i = 0; i < this.brickSpots.length; i++) {
			if (this.brickSpots[i].contains(point.x, point.y)) {
				return this.brickSpots[i]
			}
		}
		return null;
	},

	debugRender: function() {

		for (var i = 0; i < this.brickSpots.length; i++) {
			var msg = 'x: ' + this.brickSpots[i].x + ' y: ' + this.brickSpots[i].y + ' width: ' + this.brickSpots[i].width + ' height: ' + this.brickSpots[i].height;
			// console.log(msg);
			game.debug.geom(this.brickSpots[i],'#0fffff');
		}
		
	}


}