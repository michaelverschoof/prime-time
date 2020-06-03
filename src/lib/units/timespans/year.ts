import { Timespan, TimeUnit } from '../../types';

const Year : Timespan = {

    name: TimeUnit.YEAR,
    aliases: [ 'years', 'year' ],
    milliseconds: 31556952000,

    parts (timestamp) {
        const date = new Date(timestamp);
        return [
            date.getUTCFullYear()
        ];
    }
};

export default Year;
