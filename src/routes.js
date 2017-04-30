"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefultRoute; // reference to default route. This will be used so that we can declare what route should load when the page loads without any other segments in the URL after the initial '/'
var Route = Router.Route // Route component which is used to define our routes

var routes = (
    <Route>
        <DefultRoute name="app" path="/" handler={require('./components/homePage.jsx')}></DefultRoute>
        <Route name="authors" handler={require('./components/authors/authorPage.jsx')}></Route>
        <Route name="about" handler={require('./components/authors/aboutPage.jsx')}></Route>
    </Route>
)

module.exports = routes;
