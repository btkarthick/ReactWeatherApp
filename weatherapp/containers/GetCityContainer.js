/**
 * Form Container
 * 
 */

var React = require('react');
var GetCity = require('../components/get-city');


var GetCityContainer = React.createClass({

    contextTypes : {

            router : React.PropTypes.object.isRequired

    },

    getDefaultProps: function () {

        return {

            direction: 'column'
        }

    },

    getInitialState: function () {

        return {

            city: ''
        }


    },

    handleUpdateCity: function (event) {

        this.setState({

            city: event.target.value

        });

    },

    handleSubmitCity: function (event) {

        event.preventDefault();

        var city = this.state.city;

        this.setState({ city: '' });

        this.context.router.push( '/forecast/' + city );


        // getWeather(city)
        //     .then(function (weatherData) {

        //         console.log('Weather Data', weatherData);

        //     })
        //     .catch(function (err) {

        //         console.error('Error in fetching weather data ' + err);

        //     });

        

    },

    render: function () {

        return (<GetCity   formType={this.props.direction}
            onUpdateCity={this.handleUpdateCity}
            onSubmitCity={this.handleSubmitCity}
            city={this.state.city} />
        )
    }

});

module.exports = GetCityContainer;