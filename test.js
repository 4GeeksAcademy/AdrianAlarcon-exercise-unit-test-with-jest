const { fromDollarToYen } = require('./app.js');
const { fromEuroToDollar } = require('./app.js');
const { fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function () {
    let dollars = fromEuroToDollar(3.5);
    let expected = 3.5 * 1.07;
    expect(dollars).toBeCloseTo(expected);
});

test("One Dollar should be 156.5 yen", function () {
    let yen = fromDollarToYen(6.3);
    let expected = 6.3 * 156.5;
    expect(yen).toBeCloseTo(expected);
});

test("One Yen should be 0.87 pounds", function () {
    let pound = fromYenToPound(501);
    let expected = 501 * 0.87;
    expect(pound).toBeCloseTo(expected);
})