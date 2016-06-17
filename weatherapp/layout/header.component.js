/**
 * header.js
 * @DESC: header component 
 * 
 */

var React = require('react');
var PropTypes = React.PropTypes;

var GetCityContainer = require('../containers/GetCityContainer');

var styles = {

    formRight : { padding: '17px 0 0 0' }
}

var HeaderComponent = function (props) {

    return (
        <header className="clearfix">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 col-md-push-8">
                      <div style={styles.formRight}>
                        <GetCityContainer direction='row'/>
                      </div>
                     
                    </div>
                    <div className="col-md-6 col-md-pull-3">

                        <div className="logo">
                            <a href="#/">{ props.logotext }</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )

};

 HeaderComponent.PropTypes = {

        logotext: PropTypes.string.isRequired
    }


module.exports = HeaderComponent;
