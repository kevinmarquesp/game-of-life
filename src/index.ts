import Config from './models.js'
import Screen from './view.js'
import Game from './controllers.js'

const canvas: HTMLCanvasElement = document.querySelector('canvas#gameCanvas')!
const context: CanvasRenderingContext2D = canvas.getContext('2d')!

const screen = new Screen(canvas, context)

if (Config.initGeneration === null)
    Config.initGeneration = Game.randomLayout(40, 40)

async function loop() {
    screen.clear();
    screen.render(Config.initGeneration!, Config.grid.rows, Config.grid.cols)

    setTimeout(() => requestAnimationFrame(loop), Config.delay)
}

requestAnimationFrame(loop)
