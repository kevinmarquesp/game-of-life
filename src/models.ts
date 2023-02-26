interface ConfigInterface {
    delay: number,
    cellColor: string
    cellSize: number
    initGeneration: Array<Array<boolean>> | null

    grid: {
        rows: number
        cols: number
    }
}

const Config: ConfigInterface = {
    delay: 50,
    cellColor: 'yellow',
    cellSize: 16,
    initGeneration: null,

    grid: {
        rows: 160,
        cols: 160
    }
}

export default Config
