"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute; // reference to default route. This will be used so that we can declare what route should load when the page loads without any other segments in the URL after the initial '/'
var Route = Router.Route; // Route component which is used to define our routes
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
    <Route name="app" path="/" handler={require('./components/app.jsx')}>
        <DefaultRoute handler={require('./components/homePage.jsx')} />
        <Route name="authors" handler={require('./components/authors/authorPage.jsx')} />
        <Route name="about" handler={require('./components/about/aboutPage.jsx')} />
        <NotFoundRoute handler={require('./components/404.jsx')}></NotFoundRoute>
    </Route>
);

module.exports = routes;
