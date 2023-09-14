subarrayDivision = () => {
    let chocolate = [1, 2, 1, 3, 2]; // You can change the values of squares of the chocolate to test the code. 
    let m = 2, d = 3; // m is the length of the chocolate to need to reach and d is total square count to need to reach.
    // m is Ron's birth month and d is Ron's birth day.

    let partOfChocolate = [];
    let correct = 0;
    for (let i = 0; i <= chocolate.length; i++) {
        let chocolateBackup = chocolate.map(returnerFunction)
        let chocolateTotal = 0;
        if (i + m <= chocolate.length) {
            partOfChocolate = chocolateBackup.splice(i, m)
            for (let j = 0; j < m; j++) {
                chocolateTotal += partOfChocolate[j];
            }
            if (chocolateTotal == d) {
                correct++;
            }
        }
        else return correct;
    }

}

returnerFunction = (x) => {
    return x;
}

document.getElementById("result").innerHTML = subarrayDivision();