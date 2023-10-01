var searchBTN = $('#search');
var inputEL = $('#citySearch');


searchBTN.on('click', function() {
    console.log(inputEL.val())
    fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + inputEL.val() + '&limit=1&appid=b364c079aaefaadfbc5f1d3a45eebea4', {

    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        console.log(data[0]);
        console.log(data[0].lat);
    })
})