/* Interfaces */

export interface Temporal {
    readonly aliases : string[];
    readonly milliseconds : number;

    parts (timestamp : number) : number[];
}

export interface Formats {
    [key : string] : FormattingOptions;
}

export interface FormattingOptions {
    [key : string] : string | boolean | number;
}

export interface Timezone {
    region : string;
    offset : number;
}

/* Enums */

export const enum FormattingValues {
    NUMERIC_FIXED = '2-digit',
    NUMERIC_FLEXIBLE = 'numeric',
    TEXTUAL_LONG = 'long',
    TEXTUAL_SHORT = 'short'
}

export enum Timespan {
    MILLISECONDS = 'milliseconds',
    MILLISECOND = 'millisecond',
    SECONDS = 'seconds',
    SECOND = 'second',
    MINUTES = 'minutes',
    MINUTE = 'minute',
    HOURS = 'hours',
    HOUR = 'hour',
    DAYS = 'days',
    DAY = 'day',
    MONTHS = 'months',
    MONTH = 'month',
    YEARS = 'years',
    YEAR = 'year'
}
