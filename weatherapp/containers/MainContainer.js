/**
 * main.js
 * @DESC : Application main file
 * This component will be called whenever the default router is hit
 */

var React = require('react');
var Header = require('../layout/header.component');
var Footer = require('../layout/footer.component');

var Main = React.createClass({

    getDefaultProps : function(){

        return {

            headerText : 'Weather Report'
        }

    },
    
    render : function () {
        
       return ( 

            <div className='main-wrapper'>
                <Header  logotext={ this.props.headerText } />
                <div className='main-contnet'>
                     { this.props.children }
                </div>
                
            </div>
        )

    }

});

module.exports = Main;