export default class Screen {
    constructor(canvas, context) {
        this.props = {
            canvas: canvas,
            context: context,
            cellWidth: 16,
            cellColor: 'yellow'
        };
    }
    drawnAt(x, y) {
        x = this.props.cellWidth * x;
        y = this.props.cellWidth * y;
        this.props.context.fillStyle = this.props.cellColor;
        this.props.context.fillRect(x, y, 16, 16);
    }
    clear() {
        this.props.context.clearRect(0, 0, this.props.canvas.width, this.props.canvas.height);
    }
}
