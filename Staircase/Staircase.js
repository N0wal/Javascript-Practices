Staircase = () => {
    let n = 12; //You can change "n" to make bigger or smaller staircase or pyramid :)
    let staircase = "";

    for (let i = 0; i < n; i++) {
        for (let j = n - 1; j >= 0; j--) {
            if (j > i) {
                staircase += " ";
            }
            else if (j <= i)
                staircase += "#";
        }
        staircase += "\n"
        document.getElementById("result").innerHTML = staircase += "<br/>";
    }
    var brDelete = staircase.replaceAll("<br/>", "")
    // Because of the JavaScript rules, we cant add spaces (" ") to an innerHTML. So I used <br/> while printing in innerHTML and aligned hashtags to the right. After that, I wanted to log it for a clean view. So, I used replaceAll() function to delete all <br/>'s in the staircase string and I got the clean view.
    console.log(brDelete)
}

Staircase();