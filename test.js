test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});

test("One Dollar should be 156.5 yen", function() {

    const { fromDollarToYen } = require('./app.js');

    const yen = fromDollarToYen(6);

    const expected = 6 * 156.5; 
    
     expect(fromDollarToYen(6)).toBe(939); 
});

test("One Yen should be 0.87 pounds", function() {
 
    const { fromYenToPound } = require('./app.js');

    const pound = fromYenToPound(500);

    const expected = 500 * 0.87; 
    
     expect(fromYenToPound(500)).toBe(435); 
})