$ = jQuery = require('jquery'); // nice little trick to say that both $ and jQuery resolve to require('jquery'). We need to require this because boostrap expects jQuery to be in the global namespace.
var React = require('react');
var Home = require('./components/homepage.js');
var About = require('./components/about/aboutPage');

var App = React.createClass({
    render: function() {
        // 'use strict';
        var Child; // which child we want to render

        switch(this.props.route) {
            case 'about': Child = About; break; // if the URL is /about
            default: Child = Home;
        }

        return (
            <div>
                <Child/>
            </div>
        );
    }
});

var render = function() { // an abstraction that sits above the home page
    "use strict";
    var route = window.location.hash.substr(1);
    React.render(<App route={route} />, document.getElementById('app'));
};

window.addEventListener('hashchange', render);

React.render(<Home/>, document.getElementById('app'));
