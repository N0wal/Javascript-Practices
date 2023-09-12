plusMinus();

function plusMinus() {
    let arr = [-4, 3, -9, 0, 4, 1]
    let negative = 0, positive = 0, zero = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0)
            negative++;
        else if (arr[i] > 0)
            positive++;
        else
            zero++;
    }
    negative /= arr.length;
    positive /= arr.length;
    zero /= arr.length;
    document.getElementById("result").innerHTML = [positive.toFixed(6), negative.toFixed(6), zero.toFixed(6)]
}