

// Helper Function
export function isExist(arr, type, name) {
  if (type === 'item') {
    const found = arr.some(el => el.item === name);
    const index = arr.findIndex(el => el.item === name);
    return {
      found: found,
      index: index
    };
  } else if (type === 'name') {
    const found = arr.some(el => el.name === name);
    const index = arr.findIndex(el => el.name === name);
    return {
      found: found,
      index: index
    };
  } else if (type === 'type') {
    const found = arr.some(el => el.category === name);
    const index = arr.findIndex(el => el.category === name);
    return {
      found: found,
      index: index
    };
  } else if (type === 'priceFor') {
    const found = arr.some(el => el.priceFor === name);
    const index = arr.findIndex(el => el.priceFor === name);
    return {
      found: found,
      index: index
    };
  }
}

export function checkDuplicate(items, buyer) {
  let array1: any[] = [];
  items.forEach(element => {
    if (!isExist(array1, 'name', element.name)?.found) {
      array1.push(element);
    } else {
      throw new Error('Error due to duplicates name in Items');
    }
  });

  let array2: any[] = [];
  buyer.forEach(element => {
    if (!isExist(array2, 'name', element.name)?.found) {
      array2.push(element);
    } else {
      throw new Error("Error due to duplicates buyer's name");
    }
  });
}


export function checkPrices(array, name) {
  if (isExist(array, 'name', name)?.found) {
    const index = isExist(array, 'name', name)?.index;
    // console.log('ARRAY: ', array[index]);

    const regularPriceIsExist = array[index].prices.some(el => el.priceFor === 'regular');
    if (!regularPriceIsExist) {
      return {
        message: 'Summary cannot be printed due to no regular price in one of product in Items'
      };
    }
    return array[index].prices;
  }
};

export function selectPrice(array, priceFor) {
  if (isExist(array, 'priceFor', priceFor)?.found) {
    const index = isExist(array, 'priceFor', priceFor)?.index;
    return array[index];
  } else {
    const index = isExist(array, 'priceFor', 'regular')?.index;
    return array[index];
  }
};

export function checkBuyersType(array, name) {
  if (isExist(array, 'name', name)?.found) {
    const index = isExist(array, 'name', name)?.index;
    return array[index].type;
  }
};

export function sort(data, type) {
  if (type === 'qty') {
    return data.sort((a, b) => (a.qty < b.qty) ? 1 : -1);
  } else if (type === 'spent') {
    return data.sort((a, b) => (a.spent < b.spent) ? 1 : -1);
  } else if (type === 'revenue') {
    return data.sort((a, b) => (a.revenue < b.revenue) ? 1 : -1);
  }
}