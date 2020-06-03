import { Timespan, TimeUnit } from '../../types';

const Hour : Timespan = {

    name: TimeUnit.HOUR,
    aliases: [ 'hours', 'hour' ],
    milliseconds: 3600000,

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
