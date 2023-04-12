import { checkBuyersType, checkPrices, isExist, selectPrice, sort } from '../helpers/helpers';

// Number 1
export const totalNumberTransaction = (data) => {
  return data.Transaction.length;
};

// Number 2
// var bestSellingItemName = '';
export const bestSellingItems = (array) => {
  let newArray: any[] = [];
  array.Transaction.forEach(item => {
    if (!isExist(newArray, 'item', item.item)?.found) {
      newArray.push({
        item: item.item,
        qty: item.qty
      });
    } else {

      const index = isExist(newArray, 'item', item.item)?.index;
      newArray[index].qty = newArray[index].qty + item.qty;
    }
  });

  const sortedArray = sort(newArray, 'qty');

  const bestSellingItem = sortedArray[0].item;
  // bestSellingItemName = sortedArray[0].item;
  return bestSellingItem;
};

// Number 3
export const bestSellingCategory = (array, input) => {
  let bestSellingItemsName = bestSellingItems(input);
  if (isExist(array, 'name', bestSellingItemsName)?.found) {
    const index = isExist(array, 'name', bestSellingItemsName)?.index;
    const data = array[index].type;
    return data;
  }
};

// Number 4 and Number 6
export const revenuePerCategory = (data) => {

  var categories: any[] = [];
  var bestSpenders: any[] = [];

  data.Transaction.forEach(item => {
    if (isExist(data.Items, 'name', item.item)?.found) {
      let index = isExist(data.Items, 'name', item.item)?.index;
      let type = data.Items[index].type;
      let qty = item.qty;
      let buyersType = checkBuyersType(data.Buyers, item.buyer);
      let prices = checkPrices(data.Items, item.item);
      if (prices.message) {
        throw new Error(prices.message);
      }
      let price = selectPrice(prices, buyersType);
      let total = qty * price.price;
      if (!isExist(categories, 'type', type)?.found) {
        categories.push({
          category: type,
          revenue: total
        });
      } else {
        let index = isExist(categories, 'type', type)?.index;
        categories[index].revenue = categories[index].revenue + total;
      }

      if (!isExist(bestSpenders, 'name', item.buyer)?.found) {
        bestSpenders.push({
          name: item.buyer,
          type: buyersType,
          spent: total
        });
      } else {
        let index = isExist(bestSpenders, 'name', item.buyer)?.index;
        bestSpenders[index].spent = bestSpenders[index].spent + total;
        // bestSpenders[index].spent += total;
      }
    }
  });

  let newBestSpenders = sort(bestSpenders, 'spent');

  let newCategories = sort(categories, 'revenue');

  return {
    categories: newCategories,
    bestSpenders: newBestSpenders
  };
};


// Number 5
export const revenueOfTheDay = (input) => {
  let totalRevenue = 0;
  let revenuePerCategories = revenuePerCategory(input).categories;
  revenuePerCategories.forEach(el => {
    totalRevenue = totalRevenue + el.revenue;
  });
  return totalRevenue;
};

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