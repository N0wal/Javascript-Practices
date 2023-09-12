function miniMaxSum() {
    let arr = [1, 3, 5, 7, 9];
    let miniNum = 0;
    let maxNum = 0;

    arr.sort(function (a, b) { return (a - b) });
    for (let i = 0; i < arr.length - 1; i++) {
        miniNum += arr[i];
    }
    for (let i = arr.length - 1; i > 0; i--) {
        maxNum += arr[i];
    }
    return [miniNum, maxNum]
}

document.getElementById("result").innerHTML = miniMaxSum();