"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BakingUnit_1 = require("./BakingUnit");
var BakingError_1 = require("../error/BakingError");
var BakingDates;
(function (BakingDates) {
    function parse(date) {
        if (!date) {
            return Date.now();
        }
        if (typeof date === 'number') {
            return date;
        }
        if (date instanceof Date) {
            return date.getTime();
        }
        var parsed = Date.parse(date);
        if (isNaN(parsed)) {
            throw new BakingError_1.default('The provided date string could not be parsed');
        }
        return parsed;
    }
    BakingDates.parse = parse;
    function parts(date, unit) {
        var parts = [date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()];
        switch (unit) {
            case BakingUnit_1.BakingUnits.YEARS:
            case BakingUnit_1.BakingUnits.MONTHS:
                return parts.slice(0, 2);
            case BakingUnit_1.BakingUnits.WEEKS:
            case BakingUnit_1.BakingUnits.DAYS:
                return parts.slice(0, 3);
            case BakingUnit_1.BakingUnits.HOURS:
                return parts.slice(0, 4);
            case BakingUnit_1.BakingUnits.MINUTES:
                return parts.slice(0, 5);
            case BakingUnit_1.BakingUnits.SECONDS:
                return parts.slice(0, 6);
            case BakingUnit_1.BakingUnits.MILLISECONDS:
            default:
                return parts;
        }
    }
    BakingDates.parts = parts;
})(BakingDates = exports.BakingDates || (exports.BakingDates = {}));
//# sourceMappingURL=BakingDate.js.map