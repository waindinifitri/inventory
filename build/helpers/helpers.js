"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sort = exports.checkBuyersType = exports.selectPrice = exports.checkPrices = exports.checkDuplicate = exports.isExist = void 0;
// Helper Function
function isExist(arr, type, name) {
    if (type === 'item') {
        var found = arr.some(function (el) { return el.item === name; });
        var index = arr.findIndex(function (el) { return el.item === name; });
        return {
            found: found,
            index: index
        };
    }
    else if (type === 'name') {
        var found = arr.some(function (el) { return el.name === name; });
        var index = arr.findIndex(function (el) { return el.name === name; });
        return {
            found: found,
            index: index
        };
    }
    else if (type === 'type') {
        var found = arr.some(function (el) { return el.category === name; });
        var index = arr.findIndex(function (el) { return el.category === name; });
        return {
            found: found,
            index: index
        };
    }
    else if (type === 'priceFor') {
        var found = arr.some(function (el) { return el.priceFor === name; });
        var index = arr.findIndex(function (el) { return el.priceFor === name; });
        return {
            found: found,
            index: index
        };
    }
}
exports.isExist = isExist;
function checkDuplicate(items, buyer) {
    var array1 = [];
    items.forEach(function (element) {
        var _a;
        if (!((_a = isExist(array1, 'name', element.name)) === null || _a === void 0 ? void 0 : _a.found)) {
            array1.push(element);
        }
        else {
            throw new Error('Error due to duplicates name in Items');
        }
    });
    var array2 = [];
    buyer.forEach(function (element) {
        var _a;
        if (!((_a = isExist(array2, 'name', element.name)) === null || _a === void 0 ? void 0 : _a.found)) {
            array2.push(element);
        }
        else {
            throw new Error("Error due to duplicates buyer's name");
        }
    });
}
exports.checkDuplicate = checkDuplicate;
function checkPrices(array, name) {
    var _a, _b;
    if ((_a = isExist(array, 'name', name)) === null || _a === void 0 ? void 0 : _a.found) {
        var index = (_b = isExist(array, 'name', name)) === null || _b === void 0 ? void 0 : _b.index;
        // console.log('ARRAY: ', array[index]);
        var regularPriceIsExist = array[index].prices.some(function (el) { return el.priceFor === 'regular'; });
        if (!regularPriceIsExist) {
            return {
                message: 'Summary cannot be printed due to no regular price in one of product in Items'
            };
        }
        return array[index].prices;
    }
}
exports.checkPrices = checkPrices;
;
function selectPrice(array, priceFor) {
    var _a, _b, _c;
    if ((_a = isExist(array, 'priceFor', priceFor)) === null || _a === void 0 ? void 0 : _a.found) {
        var index = (_b = isExist(array, 'priceFor', priceFor)) === null || _b === void 0 ? void 0 : _b.index;
        return array[index];
    }
    else {
        var index = (_c = isExist(array, 'priceFor', 'regular')) === null || _c === void 0 ? void 0 : _c.index;
        return array[index];
    }
}
exports.selectPrice = selectPrice;
;
function checkBuyersType(array, name) {
    var _a, _b;
    if ((_a = isExist(array, 'name', name)) === null || _a === void 0 ? void 0 : _a.found) {
        var index = (_b = isExist(array, 'name', name)) === null || _b === void 0 ? void 0 : _b.index;
        return array[index].type;
    }
}
exports.checkBuyersType = checkBuyersType;
;
function sort(data, type) {
    if (type === 'qty') {
        return data.sort(function (a, b) { return (a.qty < b.qty) ? 1 : -1; });
    }
    else if (type === 'spent') {
        return data.sort(function (a, b) { return (a.spent < b.spent) ? 1 : -1; });
    }
    else if (type === 'revenue') {
        return data.sort(function (a, b) { return (a.revenue < b.revenue) ? 1 : -1; });
    }
}
exports.sort = sort;
