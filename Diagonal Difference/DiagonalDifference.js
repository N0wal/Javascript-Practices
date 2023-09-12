function diagonalDifference() {
    /* You can change the values of arr to test. But there is a condition. For example if arr[0].length is 5, arr.length has to be equal to 5. So, every element of arr's length, has to be equal to arr.length. Like a square
    
    For example:

    var arr = [ [1,2,3,4,10],
                [4,5,6,7,15],
                [7,8,9,10,20],
                [10,11,12,13,25],
                [13,14,15,16,40]]
    */
    var arr = [ [1, 2, 3],
                [4, 5, 6],
                [9, 8, 9] ];
    let firstDiag = 0;
    let lastDiag = 0;

    for (let i = 0; i < arr.length; i++) {
        firstDiag += arr[i][i]
    }

    let j = 0
    for (let i = arr.length - 1; i >= 0; i--) {
        lastDiag += arr[j][i]
        j++;
    }
    let diagDifference = Math.abs(firstDiag - lastDiag);
    return diagDifference;
}

document.getElementById("result").innerHTML = diagonalDifference();