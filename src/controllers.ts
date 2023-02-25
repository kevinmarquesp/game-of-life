import Config from './models.js'

interface GameProps {
    grid: Array<Array<boolean>>
    generation: number
}

export default class Game {
    private props: GameProps

    constructor() {
        this.props = {
            grid: [],
            generation: 0
        }
    }

    public getGrid(): Array<Array<boolean>> {
        return this.props.grid
    }

    public setGrid(grid: Array<Array<boolean>>) {
        this.props.grid = grid;
    }

    public nextGen() {
        for (let row = 0; row < Config.grid.rows; row++) {
            for (let col = 0; col < Config.grid.cols; col++) {
                const neighbours: number = this.countNeighbours(row, col)

                if (this.props.grid[row][col] && neighbours < 2 || neighbours > 3)
                    this.props.grid[row][col] = false

                else if (!this.props.grid[row][col] && neighbours === 3)
                    this.props.grid[row][col] = true
            }
        }
    }

    private countNeighbours(row: number, col: number): number {
        const grid: Array<Array<boolean>> = this.props.grid
        const lastRow: number = Config.grid.rows - 1;
        const lastCol: number = Config.grid.cols - 1;

        const rowAbove: number = row - 1 < 0       ? lastRow : row - 1
        const rowBelow: number = row + 1 > lastRow ? 0       : row + 1
        const colBack: number  = col - 1 < 0       ? lastCol : col - 1
        const colNext: number  = col - 1 > lastCol ? 0       : col + 1

        const neighboursArr: Array<boolean> = [
            grid[rowAbove][colBack], grid[rowAbove][col], grid[rowAbove][colNext],
            grid[row][colBack],                           grid[row][colNext],
            grid[rowBelow][colBack], grid[rowBelow][col], grid[rowBelow][colNext]
        ]

        return neighboursArr.reduce((acc, value) =>
            value ? acc + 1 : acc, 0)
    }

    static randomLayout(rows: number, cols: number): Array<Array<boolean>> {
        const grid: Array<Array<boolean>> = new Array()

        for (let row = 0; row < rows; row++) {
            grid[row] = new Array()

            for (let col = 0; col < cols; col++)
                grid[row].push(Math.random() < .09 ? true : false)
        }

        return grid
    }
}
