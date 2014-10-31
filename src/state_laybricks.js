//This is the brick laying state.



var laybricks = {
    // var brickSpriteSize
    // var cornerBrickDetals = {width:, height: }
    preload: function() {},
    create: function() {
        this.brickActualSize = new Size2D(game.cache.getImage('brick').width, game.cache.getImage('brick').height);
        this.brickAnchorSize = new Size2D(114, 59),
        // this.brickOffsetDelta = new Size2D(
        // 	brickActualSize.width - brickAnchorSize.width , 
        // 	brickActualSize.height - brickAnchorSize.height);
        this.brickWell = new BrickWell(this.brickAnchorSize, this.brickActualSize);
        this.createActiveBrick();
    },

    createActiveBrick: function() {
        this.activeBrick = game.add.sprite(10, 10, 'brick');
        // this.activeBrick = game.add.sprite(game.world.centerX, game.world.centerY, 'brick');
        this.activeBrick.inputEnabled = true;
        this.activeBrick.input.enableDrag(false, true, false);

 		this.activeBrick.events.onDragStop.add(this.onDragStop, this);

    },

    // render: function() {
    //     this.brickWell.debugRender();
    // },

    onDragStop: function(sprite, pointer) {
        //Check if droped in brickwell.
        this.brickWell.checkForDropAndRecieve(sprite, pointer);

        //Create new brick on pile!
        this.createActiveBrick();
    },


    update: function() {



        //  only check for drop when mouse is clicked.
        // if (game.input.mousePointer.isDown) {
        //     //  400 is the speed it will move towards the mouse
        //     game.physics.arcade.moveToPointer(sprite, 400);

        //     //  if it's overlapping the mouse, don't move any more
        //     if (Phaser.Rectangle.contains(sprite.body, game.input.x, game.input.y)) {
        //         sprite.body.velocity.setTo(0, 0);
        //     }
        // } else {
        //     sprite.body.velocity.setTo(0, 0);
        // }


        // if (checkOverlap(sprite1, sprite2)) {
        //     text.text = 'Drag the sprites. Overlapping: true';
        // } else {
        //     text.text = 'Drag the sprites. Overlapping: false';
        // }
    },
    // function checkOverlap(spriteA, spriteB) {
    //     var boundsA = spriteA.getBounds();
    //     var boundsB = spriteB.getBounds();
    //     return Phaser.Rectangle.intersects(boundsA, boundsB);
    // }
};