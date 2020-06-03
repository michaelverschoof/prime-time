import { Timespan } from '../../types';

const Hour : Timespan = {

    milliseconds: 3600000,
    aliases: [ 'hours', 'hour' ],

    parts (timestamp) {
        const date = new Date(timestamp);
        return [
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate(),
            date.getUTCHours()
        ];
    }
};

export default Hour;
