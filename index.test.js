const { addNinePercentSalesTax } = require('./index');

const transactionItems = [
  {
    name: 'Milk',
    price: '5',
    quantity: '2',
    author: 'Joe Smith',
    debitor: 'Joe Smith',
    creditor: 'Mary'
  },
  {
    name: 'Bread',
    price: '4',
    quantity: '5',
    author: 'Joe Smith',
    debitor: 'Joe Smith',
    creditor: 'Mary'
  },
  {
    name: 'Vitamins',
    price: '24',
    quantity: '1',
    author: 'Joe Smith',
    debitor: 'Joe Smith',
    creditor: 'Mary'
  },
  {
    name: 'NY Steak',
    price: '12',
    quantity: '2',
    author: 'Joe Smith',
    debitor: 'Joe Smith',
    creditor: 'Mary'
  },
  // {
  //   name: '9% Sales Tax',
  //   price: '7.02',
  //   quantity: '10',
  //   author: 'Joe Smith',
  //   debitor: 'Joe Smith',
  //   creditor: 'StateOfCalifornia'
  // }
]

describe('addNinePercentSalesTax', () => {
  test('returns +1 transactions', () => {
    let initialLength = transactionItems.length
    let retArray = addNinePercentSalesTax( transactionItems )
    let finalLength = initialLength + 1
    expect( retArray.length ).toEqual( finalLength )
  });
  
  test('removes initial tax objects', () => {
    const noTaxObject = transactionItems.filter( item => {    
      return item.name !== '9% Sales Tax'
    })
    let initialLength = transactionItems.length
    let retArray = addNinePercentSalesTax( transactionItems )
    let finalLength = 2*initialLength - noTaxObject.length;
    expect( noTaxObject.length ).toEqual( finalLength )
  });
})
