//Starting state.

var gameplaystate = {

	preload: function() {

	},

	create: function() {

	},

	update: function() {

	}

};

var game = new Phaser.Game(400,300,Phaser.AUTO, 'gameDiv');

game.state.add('main', gameplaystate);
game.state.start('main')
