var bootState = {

	preload: function() {
		game.load.image('progressbar', 'assets/splash.png');
	},

	create: function() {
		game.stage.backgroundColor= '#A4FF99';
		game.physics.startSystem(Phaser.Physics.ARCADE);

		//start Load state
		game.state.start('loadState');

	},

	update: function() {

	}

};