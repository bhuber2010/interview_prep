function perfectCity(departure, destination) {
    var recX = Math.floor(destination[0]) == Math.floor(departure[0]) ? true : false;
    var recY = Math.floor(destination[1]) == Math.floor(departure[1]) ? true : false;

    var xLen = (Math.abs(destination[0] - departure[0]));
    var xPart = 0;
    var xPart1 = Math.abs((1 - (destination[0] % 1)) + (1 - (departure[0] % 1)));
    var xPart2 = Math.abs((destination[0] % 1) + (departure[0] % 1));
    xPart1 < xPart2 ? xPart = xPart1 : xPart = xPart2;

    var yLen = (Math.abs(destination[1] - departure[1]));
    var yPart = 0;
    var yPart1 = Math.abs((1 - (destination[1] % 1)) + (1 - (departure[1] % 1)));
    var yPart2 = Math.abs((destination[1] % 1) + (departure[1] % 1));
    yPart1 < yPart2 ? yPart = yPart1 : yPart = yPart2;

    if(recX == true || recY == true) {
        return Math.floor(xLen) + xPart + Math.floor(yLen) + yPart;
    } else {
        return xLen + yLen
    }

}
