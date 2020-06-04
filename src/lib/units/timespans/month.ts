import { Timespan, TimeUnit } from '../../types';

const Month : Timespan = {

    aliases: [ TimeUnit.MONTHS, TimeUnit.MONTH ],
    milliseconds: 2629746000,

    parts (timestamp) {
        const date = new Date(timestamp);
        return [
            date.getUTCFullYear(),
            date.getUTCMonth()
        ];
    }
};

export default Month;