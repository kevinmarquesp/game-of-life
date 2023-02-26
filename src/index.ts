import Config from './models.js'
import Screen from './view.js'
import Game from './controllers.js'

const canvas: HTMLCanvasElement = document.querySelector('canvas#gameCanvas')!
const context: CanvasRenderingContext2D = canvas.getContext('2d')!

const screen = new Screen(canvas, context)
const game = new Game()

function updateCanvasSize() {
    const newWidth = window.innerWidth
    const newHeight = window.innerHeight

    canvas.width = Math.floor(newWidth / Config.cellSize) * Config.cellSize
    canvas.height = Math.floor(newHeight / Config.cellSize) * Config.cellSize

    Config.grid.rows = canvas.height / Config.cellSize
    Config.grid.cols = canvas.width / Config.cellSize
}

updateCanvasSize()

if (Config.initGeneration === null)
    Config.initGeneration = Game.randomLayout()

game.setGrid(Config.initGeneration!)

function loop() {
    screen.clear();
    screen.render(game.getGrid())

    setTimeout(() => {
        game.nextGen()
        requestAnimationFrame(loop)
    }, Config.delay)
}

window.addEventListener('resize', updateCanvasSize)
loop()
