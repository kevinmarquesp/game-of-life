import { Config } from './models.js';
import Screen from './view.js';
import Game from './controllers.js';
const canvas = document.querySelector('canvas#gameCanvas');
const context = canvas.getContext('2d');
const screen = new Screen(canvas, context);
const game = new Game();
function loop() {
    screen.clear();
    screen.render(game.getGrid());
    setTimeout(() => {
        game.nextGen();
        requestAnimationFrame(loop);
    }, Config.delay);
}
function updateCanvasSize() {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;
    canvas.width = Math.floor(newWidth / Config.cellSize) * Config.cellSize;
    canvas.height = Math.floor(newHeight / Config.cellSize) * Config.cellSize;
    Config.grid.rows = canvas.height / Config.cellSize;
    Config.grid.cols = canvas.width / Config.cellSize;
    game.resize(Config.grid.rows, Config.grid.cols);
}
updateCanvasSize();
if (Config.initGeneration === null)
    Config.initGeneration = Game.randomLayout(Config.grid.rows, Config.grid.cols);
game.setGrid(Config.initGeneration);
window.addEventListener('resize', updateCanvasSize);
loop();
