export interface Timespan {
    milliseconds : number
    aliases : string[]

    validate (value : number) : boolean
    parts (timestamp : number) : number[]
}