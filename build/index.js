"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("./database/database");
var helpers_1 = require("./helpers/helpers");
var functions_1 = require("./functions/functions");
helpers_1.checkDuplicate(database_1.input.Items, database_1.input.Buyers);
functions_1.revenuePerCategory(database_1.input);
console.log('SUMMARY: ');
console.log({
    totalTransaction: functions_1.totalNumberTransaction(database_1.input),
    bestSellingItem: functions_1.bestSellingItems(database_1.input),
    bestSellingCategory: functions_1.bestSellingCategory(database_1.input.Items, database_1.input),
    rpc: functions_1.revenuePerCategory(database_1.input).categories,
    revenue: functions_1.revenueOfTheDay(database_1.input),
    bestSpenders: functions_1.revenuePerCategory(database_1.input).bestSpenders
});
