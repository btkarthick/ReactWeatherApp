/**
 * forecast.js
 * 
 */

var React = require('react');


var puke = function(obj) {

  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

var Loading = function () {

    return (

        <div className='text-center'>
            <h3> Loading... </h3>
        </div>
    )

};

var DayItem = function (props) {
    

    return (
              <div className='col-md-4'>
                { puke(props.day) } 
              </div>  

           )

}

var WeatherReport = function (props) {

    return (
                <div className='row'>
                    { props.forecasts.list.map(function(item){
                       return <DayItem key={item.dt} day={item} />
                    })}
                </div>
           )
};


var ForecastComponent = function (props) {

    var renderForecasts = (props.Loading) ? <Loading /> : <WeatherReport forecasts={props.Forecast} />;


    return (

        <div className='container'>

            <div className='text-center'>
                <h1> Weather Report For { props.selectedCity.toUpperCase() } </h1>
            </div>

            {renderForecasts}

        </div >
    )

};

module.exports = ForecastComponent;