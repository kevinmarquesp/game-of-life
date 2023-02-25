import Config from './models.js';
export default class Screen {
    constructor(canvas, context) {
        this.props = {
            canvas: canvas,
            context: context,
        };
    }
    render(grid, rows, cols) {
        for (let row = 0; row < rows; row++)
            for (let col = 0; col < cols; col++)
                if (grid[row][col])
                    this.drawnAt(row, col);
    }
    drawnAt(x, y) {
        x = Config.cellSize * x;
        y = Config.cellSize * y;
        this.props.context.fillStyle = Config.cellColor;
        this.props.context.fillRect(x, y, Config.cellSize, Config.cellSize);
    }
    clear() {
        this.props.context.clearRect(0, 0, this.props.canvas.width, this.props.canvas.height);
    }
}
