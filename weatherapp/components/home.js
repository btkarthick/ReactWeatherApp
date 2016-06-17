/**
 * Home page component
 * 
 */

var React = require('react');
var GetCityContainer = require('../containers/GetCityContainer');

var styles = {

    dummyHeight: { height: '150px' }

}

var Home = React.createClass({

    render: function () {

        return (
            <div className='home-wrapper'>
                <div className='container'>
                    <div style={styles.dummyHeight}></div>
                    <div className='row'>
                        <div className='col-md-4 col-md-offset-3'>
                            <h1 className='text-center'>Enter a City or State</h1>
                                <div className='row'>
                                    <div className='col-xs-6 col-xs-offset-2'>
                                        <GetCityContainer />
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )

    }
});

module.exports = Home;