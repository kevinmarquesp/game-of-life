import Config from './models.js'

interface ScreenProps {
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D
}

export default class Screen {
    private props: ScreenProps

    constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        this.props = {
            canvas: canvas,
            context: context,
        }
    }

    public render(grid: Array<Array<boolean>>, rows: number, cols: number) {
        console.log(grid)
        console.log(cols)

        for (let row = 0; row < rows; row++)
            for (let col = 0; col < cols; col++)
                if (grid[row][col])
                    this.drawnAt(row, col)
    }

    public drawnAt(x: number, y: number) {
        x = Config.cellSize * x
        y = Config.cellSize * y

        this.props.context.fillStyle = Config.cellColor
        this.props.context.fillRect(x, y, Config.cellSize, Config.cellSize)
    }

    public clear() {
        this.props.context.clearRect(0, 0, this.props.canvas.width,
            this.props.canvas.height)
    }
}
