/**
 * helpers.js file
 * 
 * Contains Remote fetching logic
 * 
 */

var axios = require('axios');

var daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var monthsArray = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];



var weatherURL = 'http://api.openweathermap.org/data/2.5/';

var __APIKEY = '68592914f75c18952b793ce56c3976c0';



var getWeatherForCity = function (city) {


    setTimeout(function () {

        return axios.get(weatherURL + 'weather?q=' + city + '&type=accurate&APPID=' + __APIKEY)

            .then(function (response) {

                return (response.data);

            });
            
    }, 2000);

};


var getForecastForCity = function (city) {

    
    return axios.get(weatherURL + 'forecast/daily?q=' + city + '&type=accurate&APPID=' + __APIKEY + '&cnt=6')

        .then(function (response) {

            return (response.data);
     
        });
};


var getDate = function (timestamp) {

    var date = new Date(timestamp * 1000);
    var day = daysArray[date.getDay()]
    var month = monthsArray[date.getMonth()] + ' ' + date.getDate();

    return day + ', ' + month;
};


module.exports = {

    getWeather: getWeatherForCity,

    getForecast: getForecastForCity,

    getDate: getDate

}