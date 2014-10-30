var gameSize = new Size2D(800, 600);
var game = new Phaser.Game(gameSize.width, gameSize.height, Phaser.AUTO, 'gameDiv');

game.state.add('bootState', bootState);
game.state.add('loadState', loadState);
game.state.add('laybricks', laybricks);
game.state.start('bootState');
