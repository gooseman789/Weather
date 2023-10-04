var searchBTN = $('#search');
var inputEL = $('#citySearch');
var listBTNS = $('#list');


searchBTN.on('click', function() {
    var inputEL = $('#citySearch');
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + inputEL.val() + '&limit=1&appid=b364c079aaefaadfbc5f1d3a45eebea4', {

    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var coordsAR = [];
        coordsAR.push(data[0].lat);
        coordsAR.push(data[0].lon);
        var cityName = inputEL.val();
        localStorage.setItem(cityName, coordsAR)
        var citystring = ((localStorage.getItem(cityName)))
        var cityAR = citystring.split(",")
        var cityLAT = cityAR[0]
        var cityLON = cityAR[1]



        fetch('http://api.openweathermap.org/data/2.5/forecast?lat=' + cityLAT + '&lon=' + cityLON + '&appid=b364c079aaefaadfbc5f1d3a45eebea4&units=imperial', {

        })
        .then(function (response1) {
            return response1.json();
        })
        .then(function (data1){
            var weatherLIST = data1.list 
            var weatherAR = []
            for (let i = 0; i < weatherLIST.length; i=i+8) {
                weatherAR.push(weatherLIST[i])
            }

            for (let i =0; i < weatherAR.length; i++) {
                var citysky = weatherAR[i].weather[0].description
                var citytemp = weatherAR[i].main.temp
                var cityHUM = weatherAR[i].main.humidity
                var citywind = weatherAR[i].wind.speed
                var elementID = '5day' + (i+1)
                $('#' + elementID).addClass('dark')
                $('#' + elementID).children('.temp').text("Temp: " + citytemp)
                $('#' + elementID).children('.wind').text("Wind speed: " + citywind + "MPH")
                $('#' + elementID).children('.humidity').text("Humidity: " + cityHUM + "%")
            }   
        })
    })
    var pastBTN = $('<button>' + inputEL.val() + '</button>');
    pastBTN.addClass("past")
    pastBTN.on('click', function () {

    })
    listBTNS.append(pastBTN)
})







