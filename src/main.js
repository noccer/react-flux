$ = jQuery = require('jquery'); // nice little trick to say that both $ and jQuery resolve to require('jquery'). We need to require this because boostrap expects jQuery to be in the global namespace.
var React = require('react');
var Home = require('./components/homepage.js');

React.render(<Home/>, document.getElementById('app'));
