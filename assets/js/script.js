var searchBTN = $('#search');
var inputEL = $('#citySearch');


searchBTN.on('click', function() {
    fetch('http://api.openweathermap.org/geo/1.0/direct?q={searchBTN}&limit={1}&appid={b364c079aaefaadfbc5f1d3a45eebea4}', {

    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
})