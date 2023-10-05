var searchBTN = $('#search');
var listBTNS = $('#list');


searchBTN.on('click', function() {
    var inputEL = $('#citySearch');
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + inputEL.val() + '&limit=1&appid=b364c079aaefaadfbc5f1d3a45eebea4', {

    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        if (!$('.center').length) {
        var extradiv = $('<div>')
        extradiv.addClass('center')
        $('header').after(extradiv)
        var cityname = $('<h1>')
        cityname.text(inputEL.val())
        cityname.addClass("centertext")
        $(extradiv).append(cityname)
        }
        else {
            $('.centertext').text(inputEL.val())
        }
        var coordsAR = [];
        coordsAR.push(data[0].lat);
        coordsAR.push(data[0].lon);
        var cityName = inputEL.val();
        localStorage.setItem(cityName, coordsAR)
        var citystring = ((localStorage.getItem(cityName)))
        var cityAR = citystring.split(",")
        var cityLAT = cityAR[0]
        var cityLON = cityAR[1]

        fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + cityLAT + '&lon=' + cityLON + '&appid=b364c079aaefaadfbc5f1d3a45eebea4&units=imperial', {

        })
        .then(function (response1) {
            return response1.json();
        })
        .then(function(data1) {
            var current = Object.keys(data1).map((key) => [key, data1[key]])
            var currentsky = current[1][1][0].description
            var currentTemp = current[3][1].temp
            var currentHUM = current[3][1].humidity
            var currentWIND = current[5][1].speed
            $('#citydate').text(dayjs().format('MMMM/DD/YYYY'))
            $('#currentsky').text(currentsky)
            $('#temp').text("Temp: " + currentTemp + "F")
            $('#wind').text("Wind speed: " + currentWIND + "MPH")
            $('#humidity').text("Humidity: " + currentHUM + "%")
        })



        fetch('http://api.openweathermap.org/data/2.5/forecast?lat=' + cityLAT + '&lon=' + cityLON + '&appid=b364c079aaefaadfbc5f1d3a45eebea4&units=imperial', {

        })
        .then(function (response2) {
            return response2.json();
        })
        .then(function (data2){
            var weatherLIST = data2.list 
            var weatherAR = []
            for (let i = 0; i < weatherLIST.length; i=i+8) {
                weatherAR.push(weatherLIST[i])
            }
            for (let i =0; i < weatherAR.length; i++) {
                var citydate = weatherAR.dt
                var citysky = weatherAR[i].weather[0].description
                var citytemp = weatherAR[i].main.temp
                var cityHUM = weatherAR[i].main.humidity
                var citywind = weatherAR[i].wind.speed
                var elementID = '5day' + (i+1)
                $('#' + elementID).addClass('dark')
                $('#' + elementID).children('.date').text(dayjs(citydate).format('MM/DD/YYYY'))
                $('#' + elementID).children('.sky').text(citysky);
                $('#' + elementID).children('.temp').text("Temp: " + citytemp + "F")
                $('#' + elementID).children('.wind').text("Wind speed: " + citywind + "MPH")
                $('#' + elementID).children('.humidity').text("Humidity: " + cityHUM + "%")
            }   
        })
    })
    var pastBTN = $('<button>' + inputEL.val() + '</button>');
    pastBTN.addClass("past")
    pastBTN.on('click', function () {
        var pastINPUT = $(this).text()
        fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + pastINPUT + '&limit=1&appid=b364c079aaefaadfbc5f1d3a45eebea4', {

    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        $('.centertext').text(pastINPUT)
        var coordsAR = [];
        coordsAR.push(data[0].lat);
        coordsAR.push(data[0].lon);
        var cityName = inputEL.val();
        localStorage.setItem(cityName, coordsAR)
        var citystring = ((localStorage.getItem(cityName)))
        var cityAR = citystring.split(",")
        var cityLAT = cityAR[0]
        var cityLON = cityAR[1]

        fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + cityLAT + '&lon=' + cityLON + '&appid=b364c079aaefaadfbc5f1d3a45eebea4&units=imperial', {

        })
        .then(function (response1) {
            return response1.json();
        })
        .then(function(data1) {
            var current = Object.keys(data1).map((key) => [key, data1[key]])
            var currentsky = current[1][1][0].description
            var currentTemp = current[3][1].temp
            var currentHUM = current[3][1].humidity
            var currentWIND = current[5][1].speed
            $('#citydate').text(dayjs().format('MM/DD/YYYY'))
            $('#currentsky').text(currentsky)
            $('#temp').text("Temp: " + currentTemp + "F")
            $('#wind').text("Wind speed: " + currentWIND + "MPH")
            $('#humidity').text("Humidity: " + currentHUM + "%")
        })



        fetch('http://api.openweathermap.org/data/2.5/forecast?lat=' + cityLAT + '&lon=' + cityLON + '&appid=b364c079aaefaadfbc5f1d3a45eebea4&units=imperial', {

        })
        .then(function (response2) {
            return response2.json();
        })
        .then(function (data2){
            var weatherLIST = data2.list 
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
                $('#' + elementID).children('.sky').text(citysky);
                $('#' + elementID).children('.temp').text("Temp: " + citytemp + "F")
                $('#' + elementID).children('.wind').text("Wind speed: " + citywind + "MPH")
                $('#' + elementID).children('.humidity').text("Humidity: " + cityHUM + "%")
            }   
        })
    })
})
    listBTNS.append(pastBTN);
})