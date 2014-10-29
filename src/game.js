var game = new Phaser.Game(400,300,Phaser.AUTO, 'gameDiv');

game.state.add('bootState', bootState);
game.state.add('loadState', loadState);
game.state.add('laybricks', laybricks);
game.state.start('bootState');
