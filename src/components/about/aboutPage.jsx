"use strict";

var React = require('react');

var About = React.createClass({
    statics: { //needs to be called statics (plural) so that it gets attached to React
        willTransitionTo: function(transition, params, query, callback) {
            // logic to determine whether this page can be transitioned to
            if (!confirm("Are you sure you want to read a page that\'s this boring?")) {
                transition.about();
            } else {
                callback(); // allows the transition to occur. If we didnt call this, the page would not be allowed to transition after the user accepted the prompt.
            }
        }
    },
    render: function() {
        return (
            <div>
                <h1>About</h1>
                <p>This application uses the following technologies:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;
