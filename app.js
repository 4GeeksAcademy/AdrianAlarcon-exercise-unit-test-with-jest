// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(dollar) {
    // 1 dollar equivale a los siguientes yenes:
    const yenRate = 109.63;
    return dollar * yenRate;
}

function fromEuroToDollar(euro) {
    // 1 euro equivale a los siguientes dollares
    const dollarRate = 1.18;
    return euro * dollarRate;
}

function fromYenToPound(yen) {
    // 1 yen equivale a las siguientes libras
    const poundRate = 0.0066;
    return yen * poundRate;
}