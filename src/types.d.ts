export interface Timespan {
    readonly milliseconds : number
    readonly aliases : string[]

    validate (value : number) : boolean
    parts (timestamp : number) : number[]
}

export interface KeyValuePairs {
    [key : string] : string
}

export interface LocaliseOptions {
    [key : string] : KeyValuePairs
}
