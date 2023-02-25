export default class Game {
    static randomLayout(rows, cols) {
        const grid = new Array();
        for (let row = 0; row < rows; row++) {
            grid[row] = new Array();
            for (let col = 0; col < cols; col++)
                grid[row].push(Math.random() < .5 ? true : false);
        }
        return grid;
    }
}
