import { Temporal, Timespan } from '../../types';

const Year : Temporal = {

    aliases: [ Timespan.YEARS, Timespan.YEAR ],
    milliseconds: 31556952000,

    parts (timestamp) {
        const date = new Date(timestamp);
        return [
            date.getUTCFullYear()
        ];
    }
};

export default Year;
