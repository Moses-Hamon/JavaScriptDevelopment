var johnsScores = [ 89, 120, 103 ];
var mikesScores = [ 116, 94, 123 ];

var mikeAvgScore = calculateAverageScore(mikesScores);
var johnAvgScore = calculateAverageScore(johnsScores);


console.log('Hello');

console.log('Johns avg score: ' + calculateAverageScore(johnsScores));
console.log('Mikes avg score: ' + calculateAverageScore(mikesScores));

if (mikeAvgScore > johnAvgScore) {
    console.log('The winner is Mike, Score: ' + mikeAvgScore);
} else if (johnAvgScore > mikeAvgScore) {
    console.log('The winner is John, Score: ' + johnAvgScore);
}else{
    console.log('There was a draw');
}





function calculateAverageScore(scoreList) {
    var avg = 0;
    for (let i = 0; i < scoreList.length; i++) {
        avg += scoreList[i];
    }
    return avg / scoreList.length;
}