export const input =
{
  Items:
    [
      {
        name: 'oval hat', // product name
        type: 'hats', // product type
        prices: [
          {
            priceFor: 'regular', // price is valid for
            price: 20000, // the price
          },
          {
            priceFor: 'VIP', // price is valid for
            price: 15000, // the price
          },
        ]
      }, {
        name: 'square hat', // product name
        type: 'hats', // product type
        prices: [
          {
            priceFor: 'regular', // price is valid for
            price: 30000, // the price
          },
          {
            priceFor: 'VIP', // price is valid for
            price: 20000, // the price
          },
          {
            priceFor: 'wholesale', // price is valid for
            price: 15000, // the price					
          }
        ]
      }, {
        name: 'magic shirt', // product name
        type: 'tops', // product type
        prices: [
          {
            priceFor: 'regular', // price is valid for
            price: 50000, // the price
          }
        ]
      }
    ],
  Buyers:
    [
      {
        name: 'Ani', // buyer name
        type: 'regular', // buyer type - VIP, regular, wholesale
      }, {
        name: 'Budi', // buyer name
        type: 'VIP', // buyer type - VIP, regular, wholesale
      }, {
        name: 'Charlie',
        type: 'regular'
      }, {
        name: 'Dipta',
        type: 'wholesale'
      }
    ],
  Transaction:
    [
      {
        item: 'magic shirt', // product name
        qty: 1, // buying quantity
        buyer: 'Ani' // buyer name
      }, {
        item: 'square hat', // product name
        qty: 2, // buying quantity
        buyer: 'Budi' // buyer name
      }, {
        item: 'magic shirt', // product name
        qty: 1, // buying quantity
        buyer: 'Ani' // buyer name
      }, {
        item: 'oval hat', // product name
        qty: 1, // buying quantity
        buyer: 'Ani' // buyer name
      }, {
        item: 'square hat',
        qty: 100,
        buyer: 'Dipta'
      }
    ]
};