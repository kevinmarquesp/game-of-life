import Config from './models.js';
import Screen from './view.js';
import Game from './controllers.js';
const canvas = document.querySelector('canvas#gameCanvas');
const context = canvas.getContext('2d');
const screen = new Screen(canvas, context);
const game = new Game();
if (Config.initGeneration === null)
    Config.initGeneration = Game.randomLayout(Config.grid.rows, Config.grid.cols);
function loop() {
    screen.clear();
    screen.render(game.getGrid(), Config.grid.rows, Config.grid.cols);
    setTimeout(() => {
        game.nextGen();
        requestAnimationFrame(loop);
    }, Config.delay);
}
game.setGrid(Config.initGeneration);
loop();
