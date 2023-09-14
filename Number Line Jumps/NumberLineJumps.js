numberLineJumps = () => {
    let x1 = 2, v1 = 1, x2 = 1, v2 = 2; /* You can change these values to test the code.
    x1 = first kangaroo's starting point.
    x2 = second kangaroo's starting point.
    v1 = first kangaroo's jumping power.
    v2 = second kangaroo's jumping power.
    */

    if (x1 < x2) {
        if (v1 > v2) {
            for (; x1 < x2;) {
                x1 += v1;
                x2 += v2;
            }
            if (x1 == x2)
                return "YES";
            else
                return "NO";
        }
        else return "NO"
    }
    else if (x2 < x1) {
        if (v2 > v1) {
            for (; x2 < x1;) {
                x1 += v1;
                x2 += v2;
            }
            if (x2 == x1)
                return "YES"
            else
                return "NO";
        }
        else return "NO"
    }
    else return "YES"
}
document.getElementById("result").innerHTML = numberLineJumps();