import { Timespan, TimeUnit } from '../../types';

const Year : Timespan = {

    aliases: [ TimeUnit.YEARS, TimeUnit.YEAR ],
    milliseconds: 31556952000,

    parts (timestamp) {
        const date = new Date(timestamp);
        return [
            date.getUTCFullYear()
        ];
    }
};

export default Year;
