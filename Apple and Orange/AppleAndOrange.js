appleAndOrange = () => {
    let appleTreeLocation = 4, orangeTreeLocation = 12, houseStartPoint = 7, houseEndPoint = 12, apples = [2, 3, -4], oranges = [3, -2, -4]; // You can change all these values to test the code. Tree locations, house's starting and ending points are the X axis values. apples and oranges arrays are the locations of the fruits compared of the tree locations' X axis.

    let applesOnHouse = 0, orangesOnHouse = 0;
    for (let i = 0; i < apples.length; i++) {
        let locationOfApple = apples[i] += appleTreeLocation;
        if (locationOfApple >= houseStartPoint && locationOfApple <= houseEndPoint)
            applesOnHouse++;
    }
    for (let i = 0; i < oranges.length; i++) {
        let locationOfOrange = oranges[i] += orangeTreeLocation;
        if (locationOfOrange >= houseStartPoint && locationOfOrange <= houseEndPoint)
            orangesOnHouse++;
    }
    document.getElementById("result").innerHTML = applesOnHouse + " " + orangesOnHouse
}
appleAndOrange();