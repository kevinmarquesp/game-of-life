import Game from './game.js';
const game = new Game();
game.start();
setTimeout(() => {
    game.stop();
}, 2000);
