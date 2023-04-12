import { input } from './database/database';
import { bestSellingCategory, bestSellingItems, revenueOfTheDay, revenuePerCategory, totalNumberTransaction } from './functions/functions';
import { checkDuplicate } from './helpers/helpers';


checkDuplicate(input.Items, input.Buyers);
revenuePerCategory(input);


console.log('SUMMARY: ');
console.log({
  totalTransaction: totalNumberTransaction(input),
  bestSellingItem: bestSellingItems(input),
  bestSellingCategory: bestSellingCategory(input.Items, input),
  rpc: revenuePerCategory(input).categories,
  revenue: revenueOfTheDay(input),
  bestSpenders: revenuePerCategory(input).bestSpenders
});