// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

// Import the function fromDollarToYen from the app.js file
const {fromDollarToYen} = require('./app.js');

// Start your first test
test('converts dollar to yen', () => {
    // Inside the test we call our fromDollarToYen function with 2 numbers
    let conversion = fromDollarToYen(14);

    // We expect the conversion of the number 14
    expect(conversion).toBe(2024.89);
});
// Import the function fromEuroToDollar from the app.js file
const {fromEuroToDollar} = require('./app.js');

// Start your first test
test('converts Euro to Dollar', () => {
    // Inside the test we call our fromEuroToDollar function with 1 numbers
    let conversionEuroToDollar = fromEuroToDollar(14);

    // We expect the conversion of the number 14
    expect(conversionEuroToDollar).toBe(15.34);
});
// Import the function fromYenToPound from the app.js file
const {fromYenToPound} = require('./app.js');

// Start your first test
test('converts Yen to Pound', () => {
    // Inside the test we call our fromYenToPound function with 1 numbers
    let conversionYenToPound = fromYenToPound(14);

    // We expect the conversion of the number 14
    expect(conversionYenToPound).toBe(0.076);
});


