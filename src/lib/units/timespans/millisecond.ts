import { Timespan } from '../../types';

const Millisecond : Timespan = {

    milliseconds: 1,
    aliases: [ 'milliseconds', 'millisecond' ],

    parts (timestamp) {
        const date = new Date(timestamp);
        return [
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate(),
            date.getUTCHours(),
            date.getUTCMinutes(),
            date.getUTCSeconds(),
            date.getUTCMilliseconds()
        ];
    }
};

export default Millisecond;