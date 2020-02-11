"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BakingError_1 = require("../error/BakingError");
/**
 * Enum pattern class
 */
var BakingUnit = /** @class */ (function () {
    function BakingUnit(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return BakingUnit;
}());
exports.BakingUnit = BakingUnit;
var BakingUnits;
(function (BakingUnits) {
    BakingUnits.MILLISECONDS = new BakingUnit('milliseconds', 1);
    BakingUnits.SECONDS = new BakingUnit('seconds', 1000);
    BakingUnits.MINUTES = new BakingUnit('minutes', 60000);
    BakingUnits.HOURS = new BakingUnit('hours', 3600000);
    BakingUnits.DAYS = new BakingUnit('days', 86400000);
    BakingUnits.WEEKS = new BakingUnit('weeks', 604800000);
    BakingUnits.MONTHS = new BakingUnit('months', 2629746000);
    BakingUnits.YEARS = new BakingUnit('years', 31556952000);
    var units = [BakingUnits.MILLISECONDS, BakingUnits.SECONDS, BakingUnits.MINUTES, BakingUnits.HOURS, BakingUnits.DAYS, BakingUnits.WEEKS, BakingUnits.MONTHS, BakingUnits.YEARS];
    function find(unit) {
        if (!unit) {
            return BakingUnits.MILLISECONDS;
        }
        if (unit instanceof BakingUnit) {
            return unit;
        }
        var found = units.find(function (unit) { return unit.name.startsWith(name); }) || null;
        if (found !== null) {
            return found;
        }
        throw new BakingError_1.default('The provided unit is not allowed.\r\nAllowed values are: millisecond(s), second(s), minute(s), hour(s), day(s), week(s), month(s), year(s)');
    }
    BakingUnits.find = find;
})(BakingUnits = exports.BakingUnits || (exports.BakingUnits = {}));
//# sourceMappingURL=BakingUnit.js.map