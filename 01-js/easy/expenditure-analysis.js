/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

let transaction = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza'
  },
  {
    id: 2,
    timestamp: 1656163200000,
    price: 5,
    category: 'Beverage',
    itemName: 'Coffee'
  },
  {
    id: 3,
    timestamp: 1656249600000,
    price: 15,
    category: 'Food',
    itemName: 'Burger'
  },
  {
    id: 4,
    timestamp: 1656336000000,
    price: 8,
    category: 'Dessert',
    itemName: 'Ice Cream'
  },
  {
    id: 5,
    timestamp: 1656422400000,
    price: 3,
    category: 'Beverage',
    itemName: 'Tea'
  },
  {
    id: 6,
    timestamp: 1656508800000,
    price: 12,
    category: 'Food',
    itemName: 'Pasta'
  },
  {
    id: 7,
    timestamp: 1656595200000,
    price: 20,
    category: 'Electronics',
    itemName: 'Earphones'
  },
  {
    id: 8,
    timestamp: 1656681600000,
    price: 50,
    category: 'Clothing',
    itemName: 'T-Shirt'
  },
  {
    id: 9,
    timestamp: 1656768000000,
    price: 7,
    category: 'Dessert',
    itemName: 'Cake'
  },
  {
    id: 10,
    timestamp: 1656854400000,
    price: 25,
    category: 'Stationery',
    itemName: 'Notebook'
  }
]
function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  for (let transaction of transactions) {
    const category = transaction.category;
    const price = transaction.price;

    if (categoryTotals[category]) {
      categoryTotals[category] += price;
    } else {
      categoryTotals[category] = price;
    }
  }

  const result = [];

  for (let category in categoryTotals) {
    result.push({ category: category, totalSpent: categoryTotals[category] });
  }

  return result;
}

console.log(calculateTotalSpentByCategory(transaction))

module.exports = calculateTotalSpentByCategory
