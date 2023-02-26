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
        const nextGrid = this.props.grid.map(row => row.slice());
        this.props.grid.forEach((currRow, row) => {
            currRow.forEach((isAlive, col) => {
                const neighbours = this.countNeighbours(row, col);
                if (isAlive && (neighbours === 2 || neighbours === 3))
                    nextGrid[row][col] = true;
                else if (isAlive && neighbours > 3)
                    nextGrid[row][col] = false;
                else if (isAlive && neighbours < 2)
                    nextGrid[row][col] = false;
                else if (!isAlive && neighbours === 3)
                    nextGrid[row][col] = true;
            });
        });
        this.props.grid = nextGrid;
        this.props.generation++;
    }
    resize(newRows, newCols) {
        const newGrid = new Array(newRows)
            .fill(false).map(() => new Array(newCols).fill(false));
        this.props.grid.forEach((currRow, row) => {
            currRow.forEach((isAlive, col) => {
                if (row < newRows && col < newCols)
                    newGrid[row][col] = isAlive;
            });
        });
        this.props.grid = newGrid;
    }
    countNeighbours(row, col) {
        const grid = this.props.grid;
        const lastRow = grid.length - 1;
        const lastCol = grid[0].length - 1;
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
        const newGrid = new Array(rows)
            .fill(null).map(() => new Array(cols).fill(null));
        newGrid.forEach((currRow, row) => currRow.map((_, col) => newGrid[row][col] = Math.random() < .5 ? true : false));
        return newGrid;
    }
}
