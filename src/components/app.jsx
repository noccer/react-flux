/*eslint-disable strict */ //disabling because we can't run strict mode, need the global $ and jQuery variables which ESlint does not usually like.

var React = require('react');
var Header = require('./common/header.jsx');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery'); // nice little trick to say that both $ and jQuery resolve to require('jquery'). We need to require this because boostrap expects jQuery to be in the global namespace.

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <RouteHandler />
                </div>
            </div>
        );
    }
});

module.exports = App;
