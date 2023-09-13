TimeConversion = () => {
    let currentTime = "07:05:45PM" // You can change the time if you want to test for other time values.
    if(currentTime.includes("PM")){
        let hour = currentTime.charAt(0) + currentTime.charAt(1);
        let timeInPm = parseInt(hour)
        timeInPm = timeInPm < 12 ? timeInPm += 12 : timeInPm
        currentTime = currentTime.slice(2).replace("PM","");
        currentTime = timeInPm.toString().concat(currentTime)
        document.getElementById("result").innerHTML = currentTime;
    }
    else {
        let hour = currentTime.charAt(0) + currentTime.charAt(1);
        hour = hour == "12" ? hour = "00" : hour
        currentTime = currentTime.slice(2).replace("AM","");
        currentTime = hour.concat(currentTime);
        document.getElementById("result").innerHTML = currentTime
    }
}
TimeConversion();