export interface Timespan {
    readonly milliseconds : number
    readonly aliases : string[]

    parts (timestamp : number) : number[]
}

export interface FormattingOptions {
    [key : string] : FormattingOption
}

export interface FormattingOption {
    [key : string] : string | boolean | number
}

export enum FormattingValues {
    NUMERIC_FIXED = '2-digit',
    NUMERIC_FLEXIBLE = 'numeric',
    TEXTUAL_LONG = 'long',
    TEXTUAL_SHORT = 'short'
}
