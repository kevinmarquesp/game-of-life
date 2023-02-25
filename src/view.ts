interface ScreenProps {
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D
    cellWidth: number
    cellColor: string
}

export default class Screen {
    private props: ScreenProps

    constructor(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        this.props = {
            canvas: canvas,
            context: context,
            cellWidth: 16, // 39x39
            cellColor: 'yellow'
        }
    }

    public drawnAt(x: number, y: number) {
        x = this.props.cellWidth * x
        y = this.props.cellWidth * y

        this.props.context.fillStyle = this.props.cellColor
        this.props.context.fillRect(x, y, 16, 16)
    }

    public clear() {
        this.props.context.clearRect(0, 0, this.props.canvas.width, this.props.canvas.height)
    }
}
