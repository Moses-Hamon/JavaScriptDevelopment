var familyBills = [ 124, 48, 268 ];
var tips = new Array;
var billTotals = new Array;

for (let i = 0; i < familyBills.length; i++) {
    tips.push(calculateTip(familyBills[i]));
    billTotals.push(familyBills[i] + tips[i]);
}

console.log(tips);
console.log(billTotals);


function calculateTip(bill) {
    switch (true) {
        case (bill < 50):
            return bill * 0.20;
        case (bill > 50 && bill < 200): 
            return bill * 0.15;
        default:
        return bill * 0.10;
    }
}