export type TypeGrid = Array<Array<boolean>>
export type TypeRow = Array<boolean>

interface ConfigInterface {
    delay: number,
    cellColor: string
    cellSize: number
    initGeneration: TypeGrid | null

    grid: {
        rows: number
        cols: number
    }
}

export const Config: ConfigInterface = {
    delay: 50,
    cellColor: 'white',
    cellSize: 4,
    initGeneration: null,

    grid: {
        rows: 160,
        cols: 160
    }
}
