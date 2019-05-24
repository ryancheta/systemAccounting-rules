const CaNinePercentSalesTax = "9% Sales Tax";

const addNinePercentSalesTax = preTaxItems => {
  // TODO: return transactionItems array
  // with 1 additional "Sales Tax" object:
  var totalTax = 0.0;
  var totalQuantity = 0;

  preTaxItems = preTaxItems.filter( (item) => {
    return item.name !== CaNinePercentSalesTax;
  });

  var taxObject = {
    name: CaNinePercentSalesTax,
    price: `${totalTax}`,
    quantity: `${totalQuantity}`,
    author: preTaxItems[0].author,
    debitor: preTaxItems[0].debitor,
    creditor: "StateOfCalifornia"
  };

  return [...preTaxItems, taxObject];
};

module.exports = { addNinePercentSalesTax };
