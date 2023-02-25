import Config from './models.js';
export default class Game {
    constructor() {
        this.props = {
            grid: [],
            generation: 0
        };
    }
    getGrid() {
        return this.props.grid;
    }
    setGrid(grid) {
        this.props.grid = grid;
    }
    nextGen() {
        for (let row = 0; row < Config.grid.rows; row++) {
            for (let col = 0; col < Config.grid.cols; col++) {
                const neighbours = this.countNeighbours(row, col);
                if (this.props.grid[row][col] && neighbours < 2 || neighbours > 3)
                    this.props.grid[row][col] = false;
                else if (!this.props.grid[row][col] && neighbours === 3)
                    this.props.grid[row][col] = true;
            }
        }
    }
    countNeighbours(row, col) {
        const grid = this.props.grid;
        const lastRow = Config.grid.rows - 1;
        const lastCol = Config.grid.cols - 1;
        const rowAbove = row - 1 < 0 ? lastRow : row - 1;
        const rowBelow = row + 1 > lastRow ? 0 : row + 1;
        const colBack = col - 1 < 0 ? lastCol : col - 1;
        const colNext = col - 1 > lastCol ? 0 : col + 1;
        const neighboursArr = [
            grid[rowAbove][colBack], grid[rowAbove][col], grid[rowAbove][colNext],
            grid[row][colBack], grid[row][colNext],
            grid[rowBelow][colBack], grid[rowBelow][col], grid[rowBelow][colNext]
        ];
        return neighboursArr.reduce((acc, value) => value ? acc + 1 : acc, 0);
    }
    static randomLayout(rows, cols) {
        const grid = new Array();
        for (let row = 0; row < rows; row++) {
            grid[row] = new Array();
            for (let col = 0; col < cols; col++)
                grid[row].push(Math.random() < .09 ? true : false);
        }
        return grid;
    }
}
