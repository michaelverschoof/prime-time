/**
 * Localised formats
 *
 * Year uses the 'numeric' for a full year where '2-digit' is the shorthand
 * Example: 'numeric' = 1986, '2-digit' = 86
 *
 * The other formats (e.g. month) use it the other way around
 * Example: 'numeric' = 6, '2-digit' = 06
 */
export enum LocalisedFormats {
    NUMERIC_FIXED = '2-digit',
    NUMERIC_FLEXIBLE = 'numeric',
    TEXTUAL_LONG = 'long',
    TEXTUAL_SHORT = 'short'
}
