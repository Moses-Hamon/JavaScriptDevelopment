// mark object
var mark = new Object();
mark.firstName = 'Mark Eley';
mark.mass = 105;
mark.height = 156;
mark.calcBMI = function() {
    this.BMI = this.mass / ( this.height ^ 2 );
    return this.BMI;
}

// mike object
var mike = {
    fullName:'Mike Bike',
    mass: 95,
    height: 186,
    // calculate BMI method
    calcBMI: function() {
        this.BMI = this.mass / ( this.height ^ 2 );
        return this.BMI;
    }
};


if (mike.calcBMI() > mark.calcBMI()) {
    console.log('Mike has the higher BMI: ' + mike.BMI);
} else if (mike.calcBMI < mark.calcBMI) {
    console.log('Mark has the higher BMI: ' + mark.BMI);
} else {
    console.log('Mark and Mike both have the same BMI');
}

console.log('Mark: ' + mark.BMI);
console.log('Mike: ' + mike.BMI);



