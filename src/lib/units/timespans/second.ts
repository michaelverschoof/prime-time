import { Timespan } from '../../types';

const Second : Timespan = {

    milliseconds: 1000,
    aliases: [ 'seconds', 'second' ],

    parts (timestamp) {
        const date = new Date(timestamp);
        return [
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate(),
            date.getUTCHours(),
            date.getUTCMinutes(),
            date.getUTCSeconds()
        ];
    }
};

export default Second;
