/**
 * helpers.js file
 * 
 * Contains Remote fetching logic
 * 
 */

var axios = require('axios');

var weatherURL = 'http://api.openweathermap.org/data/2.5/';

var __APIKEY = '68592914f75c18952b793ce56c3976c0';



var getWeatherForCity = function (city) {

    return axios.get(weatherURL + 'weather?q=' + city + '&type=accurate&APPID=' + __APIKEY)

        .then(function (response) {

            return (response.data);

        });
};


var getForecastForCity = function ( city ) {
    
    return axios.get( weatherURL + 'forecast/daily?q=' + city + '&type=accurate&APPID=' + __APIKEY + '&cnt=5')

                .then( function (response) {
                    
                    return ( response.data );

                });


}




module.exports = {

    getWeather  : getWeatherForCity,

    getForecast : getForecastForCity

}