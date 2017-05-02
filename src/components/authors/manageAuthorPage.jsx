"use strict";

var React = require('react');
var AuthorForm = require('./authorForm.jsx');

var ManageAuthorPage = React.createClass({
    // top-level components are the best place to manage state
    getInitialState: function() {
        return {
            author: {
                id: "",
                firstName: "",
                lastName: ""
            }
        };
    },

    setAuthorState: function(event) { // this funtion will be called for every keypress that we make
        var field = event.target.name;
        var value = event.target.value;
        console.log(value);
        this.state.author[field] = value;
        return this.setState({
            author: this.state.author
        });
    },

    render: function() {
        return (
            <AuthorForm author={this.state.author} onChange={this.setAuthorState}/>
        );
    }
});

module.exports = ManageAuthorPage;
