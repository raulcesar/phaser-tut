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
		this.outerGroup = game.add.group();

		//Phaser uses 0,0 = top left, so we need to calculate initial y position.
		var currentRowY = game.world.height - this.brickActualSize.height + (this.brickOffsetDelta.height * this.yOffset);

		console.log('Brick size: ' + this.brickActualSize.height + ' currentRowY: ' + currentRowY);


		for (var i = 0; i < this.brickSpots.length; i++) {
			var rect = new Phaser.Rectangle(
				this.brickWellX + (i * this.brickAnchorSize.width), 
				currentRowY, 
				this.brickAnchorSize.width,
				this.brickAnchorSize.height);

			console.log('creating rect: ' + 'rectX: ' + rect.x + ' width: ' + rect.width + ' rectY: ' + rect.y + ' height ' + rect.height);
			
			//Create group 
			var group = game.add.group();
			this.outerGroup.add(group);
			// group.x = rect.x;
			// group.y = rect.y;
			// group.z = i;


			this.brickSpots[i] = {group: group, rect: rect, empty: true};
		};
	},

	checkForDropAndRecieve: function(sprite, point) {
        var dropedSpot = this.getDropedOnSpot(point);

        if (dropedSpot !== null) {
        	this.recieveBrick(sprite, dropedSpot)
        } else {
        	sprite.destroy();
        	//Remove the brick.
        }

	}, 
	
	getDropedOnSpot: function(point) {
		return this.getDropedOnRectOrSpot(point, true);
	},

	getDropedOnRect: function(point) {
		return this.getDropedOnRectOrSpot(point);
	},

	getDropedOnRectOrSpot: function(point, returnSpot) {
		for (var i = 0; i < this.brickSpots.length; i++) {
			var rect = this.brickSpots[i].rect;
			console.log('rectX: ' + rect.x + ' to ' + 
				parseFloat(rect.x + rect.width) + 
				' rectY: ' + parseFloat(rect.y) + ' to ' + 
				parseFloat(rect.y + rect.height));
			console.log('pointerX: ' + point.x + ' rectY: ' + point.y);

			console.log('Contains: ' + rect.contains(point.x, point.y));

			if (rect.contains(point.x, point.y)) {
				console.log('returnSpot: ' + returnSpot);
				if (returnSpot) {
					console.log('Got i...' + i);
					return i;
				} else {
					return rect;
				}
			}
		}
		return null;
	},


	recieveBrick: function(sprite, spotIndex) {

		var spot = this.brickSpots[spotIndex];

		//Lets see what we can do about z-order.
		var rect = spot.rect;
		var group = spot.group;

		sprite.destroy();
		
		//If a group already exists, do nothing.
		if (!spot.empty) {
			return;
		}

		group.create(rect.x, rect.y, 'brick');
		spot.empty = false;
	},

	debugRender: function() {

		for (var i = 0; i < this.brickSpots.length; i++) {
			var rect = this.brickSpots[i].rect;
			var msg = 'x: ' + rect.x + ' y: ' + rect.y + ' width: ' + rect.width + ' height: ' + rect.height;
			// console.log(msg);
			if (i%2 === 0) {
				game.debug.geom(rect,'#0fffff');
			} else {
				game.debug.geom(rect,'#FFFFFF');
			}
			
		}
		
	}


}