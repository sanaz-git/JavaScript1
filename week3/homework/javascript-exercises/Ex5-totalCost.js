const cartForParty = {
    beers: 1.75,
    chips: 0.99,
    orange: 0.99,
    chocolate: 1.75,
    potato: 1.75,
};

function calculateTotalPrice() {
    let sum = 0;
    for (let key in cartForParty) {
        sum += cartForParty[key];
    }
    return `Total: € ${sum}`
};

console.log(calculateTotalPrice())
