"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var BakingUnit_1 = require("./lib/BakingUnit");
var BakingDate_1 = require("./lib/BakingDate");
function baketime(date) {
    if (date instanceof BakeTime) {
        return date;
    }
    return new BakeTime(BakingDate_1.BakingDates.parse(date));
}
exports.baketime = baketime;
var BakeTime = /** @class */ (function () {
    function BakeTime(timestamp) {
        this.timestamp = timestamp;
        this.date = new Date(timestamp);
    }
    BakeTime.prototype.add = function (amount, unit) {
        var addend = BakeTime.multiply(amount, unit);
        return this.update(this.timestamp + addend);
    };
    BakeTime.prototype.subtract = function (amount, unit) {
        var subtrahend = BakeTime.multiply(amount, unit);
        return this.update(this.timestamp - subtrahend);
    };
    BakeTime.prototype.diff = function (other, unit) {
        var calculationUnit = BakingUnit_1.BakingUnits.find(unit);
        if (calculationUnit === BakingUnit_1.BakingUnits.MILLISECONDS) {
            return this.getTimestamp() - other.getTimestamp();
        }
        if (calculationUnit === BakingUnit_1.BakingUnits.YEARS) {
            return this.getDate().getFullYear() - other.getDate().getFullYear();
        }
        var thisParts = BakingDate_1.BakingDates.parts(this.getDate(), calculationUnit);
        var otherParts = BakingDate_1.BakingDates.parts(other.getDate(), calculationUnit);
        var division = (Date.UTC.apply(Date, __spreadArrays([thisParts[0], thisParts[1]], thisParts.splice(2))) - Date.UTC.apply(Date, __spreadArrays([otherParts[0], otherParts[1]], otherParts.splice(2)))) / calculationUnit.amount;
        return Math.sign(division) * Math.floor(Math.abs(division));
    };
    BakeTime.prototype.after = function (date, unit, equality) {
        return this.diff(date, unit) >= (equality ? 0 : 1);
    };
    BakeTime.prototype.before = function (date, unit, equality) {
        return this.diff(date, unit) <= (equality ? 0 : -1);
    };
    // between (start : BakeTime, end : BakeTime, unit ?: string | Timespan, equality ?: boolean) {
    //     return this.after(start, unit, equality) && this.before(end, unit, equality);
    // }
    //
    // same (date : BakeTime, unit ?: string | Timespan) {
    //     return this.diff(date, unit) === 0;
    // }
    BakeTime.prototype.getTimestamp = function () {
        return this.timestamp;
    };
    BakeTime.prototype.getDate = function () {
        return this.date;
    };
    BakeTime.prototype.update = function (milliseconds) {
        this.timestamp = milliseconds;
        this.date.setTime(milliseconds);
        return this;
    };
    BakeTime.multiply = function (multiplicand, unit) {
        var multiplier = BakingUnit_1.BakingUnits.find(unit).amount;
        return multiplicand * multiplier;
    };
    return BakeTime;
}());
exports.BakeTime = BakeTime;
// function checkOutsideOfficeHours () {
//     const now = new Date()
//     const isWeekend = 0 === now.getDay() || 6 === now.getDay()
//     const openFrom = new Date(now.getFullYear(), now.getMonth(), now.getDate(), isWeekend ? 12 : 9)
//     const openUntil = new Date(now.getFullYear(), now.getMonth(), now.getDate(), isWeekend ? 17 : 22)
//
//     // 60 is added in order to compare the user's timezone against Europe/Amsterdam
//     const openFromInTimeZone = openFrom.getTime() - ((openFrom.getTimezoneOffset() + 60) * 60000)
//     const openUntilInTimeZone = openUntil.getTime() - ((openUntil.getTimezoneOffset() + 60) * 60000)
//
//     $scope.isOutsideOfficeHours = now.getTime() < openFromInTimeZone || now.getTime() > openUntilInTimeZone
// }
//# sourceMappingURL=BakeTime.js.map