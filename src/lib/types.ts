export interface Timespan {
    readonly name : TimeUnit
    readonly aliases : string[]
    readonly milliseconds : number

    parts (timestamp : number) : number[]
}

export interface Formats {
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

export enum TimeUnit {
    MILLISECOND = 'millisecond',
    SECOND = 'second',
    MINUTE = 'minute',
    HOUR = 'hour',
    DAY = 'day',
    MONTH = 'month',
    YEAR = 'year'
}
