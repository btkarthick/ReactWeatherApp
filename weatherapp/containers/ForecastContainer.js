/**
 * 
 * Forecast container file
 * 
 */

var React = require('react');
var getForecast = require('../utils/helpers').getForecast;

var Forecast = require('../components/forecast');

var ForecastContainer = React.createClass({

    getInitialState: function () {

        return {
            loading: true,
            selectedCity: this.props.routeParams.city,
            forecasts : {}
        }

    },

    componentDidMount: function () {

        this.makeRequest(this.state.selectedCity);

    },

    componentWillReceiveProps : function ( nextProps ) {
        
        this.setState({ selectedCity : nextProps.routeParams.city });
        this.makeRequest(this.state.selectedCity);
    },

    makeRequest: function (city) {

        getForecast(city)

            .then(function (forecastData) {

                this.setState({ 
            
                        loading: false,
                        forecasts : forecastData 
                
            });
                console.log('ForecastData', forecastData);

            }.bind(this))

            .catch(function (err) {

                console.error('Error in fetching forecast data ' + err);

            });

    },

    render: function () {

        return (
            <Forecast
                selectedCity={ this.state.selectedCity }
                Loading={this.state.loading} 
                Forecast={this.state.forecasts}/>
        )
    }
});

module.exports = ForecastContainer;