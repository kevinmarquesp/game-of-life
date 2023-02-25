import Screen from './view.js'

const canvas: HTMLCanvasElement = document.querySelector('canvas#gameCanvas')!
const context: CanvasRenderingContext2D = canvas.getContext('2d')!

const screen = new Screen(canvas, context)

screen.drawnAt(0, 0)
