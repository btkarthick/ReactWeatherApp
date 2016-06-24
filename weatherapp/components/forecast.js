/**
 * forecast.js
 * 
 */

var React = require('react');

var PropTypes = React.PropTypes;

var manipulateDate = require('../utils/helpers').getDate;

var styles = {

    marginTop : { marginTop : '60px' },

    imgHeight : { height: '100px' },

    dateText : { display: 'block', fontSize: '16px', color: '#FD6C43', paddingTop: '12px' }

};

var puke = function(obj) {

  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
};

var Loading = function () {

    return (

        <div className='text-center'>
            <h3> Loading... </h3>
        </div>
    )

};

var DayItem = function (props) {
    
    var icon = props.day.weather[0].icon;
    
    

    return (
              <div className='col-md-4' style={styles.marginTop}>
                    <img src={'./images/' + icon + '.svg'} alt='Weather' style={styles.imgHeight} />
                    <span style={styles.dateText}> {manipulateDate(props.day.dt)} </span>
              </div>  

           )

}

var WeatherReport = function (props) {

    return (
                <div className='row'>
                    { 
                        props.forecasts.list.map(function(item){
                         return <DayItem key={item.dt} day={item} />
                      })
                
                    }
                </div>
           )
};


var ForecastComponent = function (props) {

    var renderForecasts = (props.Loading) ? <Loading /> : <WeatherReport forecasts={props.Forecast} />;


    return (

        <div className='container'>

            <div className='text-center'>
                <h1> Weather Report For { props.selectedCity.toUpperCase() } </h1>
                <h2>Selecte a day</h2>
            </div>

            {renderForecasts}

        </div >
    )

};

ForecastComponent.PropTypes = {

    selectedCity : PropTypes.string.isRequired,
    Loading : PropTypes.bool.isRequired,
    Forecast : PropTypes.object.isRequired

}

module.exports = ForecastComponent;