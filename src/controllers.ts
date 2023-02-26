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
        const nextGrid: Array<Array<boolean>> = this.props.grid.map(row =>
            row.slice())

        this.props.grid.forEach((currRow: Array<boolean>, row: number) => {
            currRow.forEach((isAlive: boolean, col: number) => {
                const neighbours: number = this.countNeighbours(row, col)

                // rule 1: any alive cell touching two or three alive neighbours survive
                if (isAlive && (neighbours === 2 || neighbours === 3))
                    nextGrid[row][col] = true

                // rule 2: any alive cell touching four or more alive neighbours dies
                else if (isAlive && neighbours > 3)
                    nextGrid[row][col] = false

                // rule 3: any alive cell that is touching less than two alive neighbours dies
                else if (isAlive && neighbours < 2)
                    nextGrid[row][col] = false

                // rule 4: any dead cell touching exactly three alive neighbours becomes alive
                else if (!isAlive && neighbours === 3)
                    nextGrid[row][col] = true
            })
        })

        this.props.grid = nextGrid
        this.props.generation++
    }

    public resize(newRows: number, newCols: number) {
        const newGrid: Array<Array<boolean>> = new Array(newRows)
            .fill(false).map(() => new Array(newCols).fill(false))

        this.props.grid.forEach((currRow: Array<boolean>, row: number) => {
            currRow.forEach((isAlive: boolean, col: number) => {
                if (row < newRows && col < newCols)
                    newGrid[row][col] = isAlive
            })
        })

        this.props.grid = newGrid
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

    static randomLayout(): Array<Array<boolean>> {
        const grid: Array<Array<boolean>> = new Array()

        for (let row = 0; row < Config.grid.rows; row++) {
            grid.push(new Array())

            for (let col = 0; col < Config.grid.cols; col++)
                grid[row].push(Math.random() < .5 ? true : false)
        }

        return grid
    }
}
