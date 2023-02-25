interface GameProps {
  delay: number,
  isRunning: boolean,
  matrix: Array<Array<boolean>>
}

export default class Game {
  private props: GameProps

  constructor() {
    this.props = {
      isRunning: true,
      delay: 2000,
      matrix: [[]]
    }
  }

  public start() {
    console.log('starting the game event loop')
    requestAnimationFrame(this.loop.bind(this))
  }

  public stop() {
    console.log('stopping the game event loop')
    this.props.isRunning = false;
  }

  private loop() {
    if (!this.props.isRunning)
      return

    requestAnimationFrame(this.loop.bind(this))
  }
}
