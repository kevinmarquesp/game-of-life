export default class Game {
    constructor() {
        this.props = {
            isRunning: true,
            delay: 2000,
            matrix: [[]]
        };
    }
    start() {
        console.log('starting the game event loop');
        requestAnimationFrame(this.loop.bind(this));
    }
    stop() {
        console.log('stopping the game event loop');
        this.props.isRunning = false;
    }
    loop() {
        if (!this.props.isRunning)
            return;
        requestAnimationFrame(this.loop.bind(this));
    }
}
