"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revenueOfTheDay = exports.revenuePerCategory = exports.bestSellingCategory = exports.bestSellingItems = exports.totalNumberTransaction = void 0;
var helpers_1 = require("../helpers/helpers");
// Number 1 (Total number of transactions)
var totalNumberTransaction = function (data) {
    return data.Transaction.length;
};
exports.totalNumberTransaction = totalNumberTransaction;
// Number 2 (Best selling item name)
// var bestSellingItemName = '';
var bestSellingItems = function (array) {
    var newArray = [];
    array.Transaction.forEach(function (item) {
        var _a, _b;
        if (!((_a = helpers_1.isExist(newArray, 'item', item.item)) === null || _a === void 0 ? void 0 : _a.found)) {
            newArray.push({
                item: item.item,
                qty: item.qty
            });
        }
        else {
            var index = (_b = helpers_1.isExist(newArray, 'item', item.item)) === null || _b === void 0 ? void 0 : _b.index;
            newArray[index].qty = newArray[index].qty + item.qty;
        }
    });
    var sortedArray = helpers_1.sort(newArray, 'qty');
    var bestSellingItem = sortedArray[0].item;
    // bestSellingItemName = sortedArray[0].item;
    return bestSellingItem;
};
exports.bestSellingItems = bestSellingItems;
// Number 3 (Best selling category)
var bestSellingCategory = function (array, input) {
    var _a, _b;
    var bestSellingItemsName = exports.bestSellingItems(input);
    if ((_a = helpers_1.isExist(array, 'name', bestSellingItemsName)) === null || _a === void 0 ? void 0 : _a.found) {
        var index = (_b = helpers_1.isExist(array, 'name', bestSellingItemsName)) === null || _b === void 0 ? void 0 : _b.index;
        var data = array[index].type;
        return data;
    }
};
exports.bestSellingCategory = bestSellingCategory;
// Number 4 and Number 6 (Revenue per category and top 3 most spenders)
var revenuePerCategory = function (data) {
    var categories = [];
    var bestSpenders = [];
    data.Transaction.forEach(function (item) {
        var _a, _b, _c, _d, _e, _f;
        if ((_a = helpers_1.isExist(data.Items, 'name', item.item)) === null || _a === void 0 ? void 0 : _a.found) {
            var index = (_b = helpers_1.isExist(data.Items, 'name', item.item)) === null || _b === void 0 ? void 0 : _b.index;
            var type = data.Items[index].type;
            var qty = item.qty;
            var buyersType = helpers_1.checkBuyersType(data.Buyers, item.buyer);
            var prices = helpers_1.checkPrices(data.Items, item.item);
            if (prices.message) {
                throw new Error(prices.message);
            }
            var price = helpers_1.selectPrice(prices, buyersType);
            var total = qty * price.price;
            if (!((_c = helpers_1.isExist(categories, 'type', type)) === null || _c === void 0 ? void 0 : _c.found)) {
                categories.push({
                    category: type,
                    revenue: total
                });
            }
            else {
                var index_1 = (_d = helpers_1.isExist(categories, 'type', type)) === null || _d === void 0 ? void 0 : _d.index;
                categories[index_1].revenue = categories[index_1].revenue + total;
            }
            if (!((_e = helpers_1.isExist(bestSpenders, 'name', item.buyer)) === null || _e === void 0 ? void 0 : _e.found)) {
                bestSpenders.push({
                    name: item.buyer,
                    type: buyersType,
                    spent: total
                });
            }
            else {
                var index_2 = (_f = helpers_1.isExist(bestSpenders, 'name', item.buyer)) === null || _f === void 0 ? void 0 : _f.index;
                bestSpenders[index_2].spent = bestSpenders[index_2].spent + total;
            }
        }
    });
    var newBestSpenders = helpers_1.sort(bestSpenders, 'spent');
    var newCategories = helpers_1.sort(categories, 'revenue');
    return {
        categories: newCategories,
        bestSpenders: newBestSpenders
    };
};
exports.revenuePerCategory = revenuePerCategory;
// Number 5 (Revenue of the day)
var revenueOfTheDay = function (input) {
    var totalRevenue = 0;
    var revenuePerCategories = exports.revenuePerCategory(input).categories;
    revenuePerCategories.forEach(function (el) {
        totalRevenue = totalRevenue + el.revenue;
    });
    return totalRevenue;
};
exports.revenueOfTheDay = revenueOfTheDay;
// Number 6
// const threeMostSpenderCustomer = (data) => {
//   var bestSpenders = [];
//   data.Transaction.forEach(item => {
//     let qty = item.qty;
//     let buyersType = checkBuyersType(data.Buyers, item.buyer);
//     let prices = checkPrices(data.Items, item.item);
//     let price = selectPrice(prices, buyersType);
//     let total = qty * price.price;
//     if (!isExist(bestSpenders, null, item.buyer, null, null).found) {
//       bestSpenders.push({
//         name: item.buyer,
//         type: buyersType,
//         spent: total
//       });
//     } else {
//       let index = isExist(bestSpenders, null, item.buyer, null, null).index;
//       bestSpenders[index].spent = bestSpenders[index].spent + total;
//     }
//   });
//   return bestSpenders;
// };
