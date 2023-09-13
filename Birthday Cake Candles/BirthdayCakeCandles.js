BirthdayCakeCandles = () => {
    let candles = [4, 4, 1, 3]; // You can change, add or remove the values of candles to test the code.
    let candleCount = 1;
    candles.sort(function (a, b) { return (b - a) })
    let biggestCandle = candles[0];
    for (let i = 1; i < candles.length; i++) {
        if (biggestCandle == candles[i]) {
            candleCount++
        }
        else break;
    }
    console.log(candles)
    console.log(candleCount)
    document.getElementById("result").innerHTML = candleCount;
}
BirthdayCakeCandles();