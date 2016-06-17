/**
 * rotues.js
 * @DESC : Router configuration file
 * All routes and its related configurations goes here
 * 
 */

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

// Component initialization

var Main = require('../containers/MainContainer');
var Home = require('../containers/HomeContainer');
var Forecast = require('../containers/ForecastContainer');


var routes = (

    <Router history={hashHistory}>
        
        <Route path='/' component={Main}>
        
            <IndexRoute component={Home} />
            <Route path='/forecast/:city' component={Forecast} />
        </Route>

   </Router>
);

module.exports = routes;