export interface Timespan {
    readonly milliseconds : number
    readonly aliases : string[]

    validate (value : number) : boolean
    parts (timestamp : number) : number[]
}

