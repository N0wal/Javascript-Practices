breakingTheRecords = () => {
    let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1] // You can change the scores to test the code.

    let minScore = scores[0], maxScore = scores[0], minCount = 0, maxCount = 0; // minCount and maxCount integers means that how many times minimum record or maximum record has been beaten.
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] < minScore) {
            minCount++;
            minScore = scores[i]
        }
        else if (scores[i] > maxScore) {
            maxCount++;
            maxScore = scores[i]
        }
    }
    return [maxCount, minCount]
}
document.getElementById("result").innerHTML = breakingTheRecords();