/*
a.length and b.length has to be equal in this practice.
*/

let a = [5,6,7]
let b = [3,6,10]

function compareTriplets() {
    let alice = 0;
    let bob = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            alice++;
        }
        if (a[i] < b[i]) {
            bob++
        }
    }
    return [alice, bob]
}

document.getElementById("result").innerHTML = compareTriplets();