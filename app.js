// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function (valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function (dollar) {
    // 1 dollar equivale a los siguientes yenes:
    let yenRate = 156.5 * dollar;
    return yenRate;
}

const fromYenToPound = function (yen) {
    // 1 yen equivale a las siguientes libras
    let poundRate = 0.87 * yen;
    return poundRate;
}

// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }