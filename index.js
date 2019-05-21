const CaNinePercentSalesTax = "9% Sales Tax";

const transactionItems = [
  {
    name: "Milk",
    price: "5",
    quantity: "2",
    author: "Joe Smith",
    debitor: "Joe Smith",
    creditor: "Mary"
  },
  // {
  //   name: "9% Sales Tax",
  //   price: 12.34,
  //   quantity: 2,
  //   author: "Joe Smith",
  //   debitor: "Joe Smith",
  //   creditor: "StateOfCalifornia"
  // },
  // {
  //   name: "9% Sales Tax",
  //   price: 1.34,
  //   quantity: 4,
  //   author: "Joe Smith",
  //   debitor: "Joe Smith",
  //   creditor: "StateOfCalifornia"
  // },
  // {
  //   name: "9% Sales Tax",
  //   price: 3.5,
  //   quantity: 5,
  //   author: "Joe Smith",
  //   debitor: "Joe Smith",
  //   creditor: "StateOfCalifornia"
  // },
  {
    name: "Bread",
    price: "4",
    quantity: "5",
    author: "Joe Smith",
    debitor: "Joe Smith",
    creditor: "Mary"
  },
  {
    name: "Vitamins",
    price: "24",
    quantity: "1",
    author: "Joe Smith",
    debitor: "Joe Smith",
    creditor: "Mary"
  },
  {
    name: "9% Sales Tax",
    price: 3.5,
    quantity: 5,
    author: "Joe Smith",
    debitor: "Joe Smith",
    creditor: "StateOfCalifornia"
  },
  {
    name: "NY Steak",
    price: "12",
    quantity: "2",
    author: "Joe Smith",
    debitor: "Joe Smith",
    creditor: "Mary"
  }
];

const addNinePercentSalesTax = preTaxItems => {
  // TODO: return transactionItems array
  // with 1 additional "Sales Tax" object:
  var totalTax = 0.0;
  var totalQuantity = 0;
  var retArray = [];

  preTaxItems.forEach( item => {
    if (item.name !== CaNinePercentSalesTax) {
      totalTax += 0.09 * item.price * Number(item.quantity);
      totalQuantity += Number(item.quantity);
      retArray.push(item);
    }
  });

  var taxObject = {
    name: CaNinePercentSalesTax,
    price: `${totalTax}`,
    quantity: `${totalQuantity}`,
    author: preTaxItems[0].author,
    debitor: preTaxItems[0].debitor,
    creditor: "StateOfCalifornia"
  };

  console.log('length: ' + totalTax.toString().length) 
  return [...retArray, taxObject];
};

const itemsWithTaxAdded = addNinePercentSalesTax(transactionItems);
console.log(itemsWithTaxAdded);
