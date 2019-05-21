const CaNinePercentSalesTax = "9% Sales Tax";

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

  return [...retArray, taxObject];
};

module.exports = { addNinePercentSalesTax };
