// object array for the bills
var johnFamily = {
    bills: [124, 48, 268, 180, 42],
    tipAmounts: [],
    totalAmount: [],
    calcTips: function () {
        // iterate through the bills
        for (let i = 0; i < this.bills.length; i++) {
            // variables for holding information
            var bill = this.bills[i];
            var tip = 0;
            var total = 0;
            // switch for deciding the tip
            switch (true) {
                case bill < 50 && bill > 0:
                    tip = bill * 0.2;
                    break;
                case bill >= 50 && bill < 200:
                    tip = bill * 0.15;
                    break;
                default:
                    tip = bill * 0.10;
                break;
            }
            //calculate the total amount
            total = bill + tip;
            // add the tip and total to the empty arrays.
            this.tipAmounts.push(tip);
            this.totalAmount.push(total);
        };
    }
};

var markFamily = {
    bills: [77, 375, 110, 45],
    tipAmounts: [],
    totalAmount: [],

    calcTips: function () {
        for (let i = 0; i < this.bills.length; i++) {
            var bill = this.bills[i];
            var tip = 0;
            var total = 0;
            switch (true) {
                case bill < 100 && bill > 0:
                    tip = bill * 0.2;
                    break;
                case bill >= 100 && bill < 300:
                    tip = bill * 0.10;
                    break;
                default:
                    tip = bill * 0.25;
                break;
            }
            total = bill + tip;
            this.tipAmounts.push(tip);
            this.totalAmount.push(total);
        };
    }
};

johnFamily.calcTips();
johnFamily.averageTip = calcTipAverage(johnFamily.tipAmounts);
markFamily.calcTips();
markFamily.averageTip = calcTipAverage(markFamily.tipAmounts);

console.log(johnFamily.bills);
console.log(johnFamily.tipAmounts);
console.log(johnFamily.totalAmount);
console.log('------------------------------------------');
console.log(markFamily.bills);
console.log(markFamily.tipAmounts);
console.log(markFamily.totalAmount);
console.log('------------------------------------------');
console.log('Average tip for John: ' + johnFamily.averageTip);
console.log('Average tip for Mark: ' + markFamily.averageTip);
console.log('------------------------------------------');

if (condition) {
    
}


function calcTipAverage(array){
    var avg = 0;
    // step through all tips (array)
    for (let i = 0; i < array.length; i++) {
        // add all tips up
        avg += array[i];
    }
    return avg / array.length;
};