import { Timespan, TimeUnit } from '../../types';

const Day : Timespan = {

    aliases: [ TimeUnit.DAYS, TimeUnit.DAY ],
    milliseconds: 86400000,

    parts (timestamp) {
        const date = new Date(timestamp);
        return [
            date.getUTCFullYear(),
            date.getUTCMonth(),
            date.getUTCDate()
        ];
    }
};

export default Day;