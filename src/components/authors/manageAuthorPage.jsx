"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm.jsx');
var AuthorApi = require('../../api/AuthorApi');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
    mixins: [ //to programatically rediect the user. mixins are just defined as an array and by convention must be called 'mixins'
        Router.Navigation
    ],

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

    saveAuthor: function(event) {
        event.preventDefault();
        AuthorApi.saveAuthor(this.state.author);
        toastr.success('Author saved.');
        this.transitionTo('authors');
    },

    render: function() {
        return (
            <AuthorForm
                author={this.state.author}
                onChange={this.setAuthorState}
                onSave={this.saveAuthor} />
        );
    }
});

module.exports = ManageAuthorPage;
