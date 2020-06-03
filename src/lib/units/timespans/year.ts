import { Timespan } from '../../types';

const Year : Timespan = {

    milliseconds: 31556952000,
    aliases: [ 'years', 'year' ],

    parts (timestamp) {
        const date = new Date(timestamp);
        return [
            date.getUTCFullYear()
        ];
    }
};

export default Year;
