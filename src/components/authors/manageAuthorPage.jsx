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
            },
            errors: {}
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

    authorFormIsValid: function() {
        var formIsValid = true;
        this.state.errors = {}; // clear any previous errors

        if (this.state.author.firstName.length < 3) {
            console.log("firstname less than 3");
            this.state.errors.firstName = "First name must be at least 3 characters.";
            formIsValid = false;
        }

        if (this.state.author.lastName.length < 3) {
            this.state.errors.lastName = "Last name must be at least 3 characters.";
            formIsValid = false;
        }

        this.setState({
            errors: this.state.errors
        });

        return formIsValid;
    },

    saveAuthor: function(event) {
        event.preventDefault();

        if(!this.authorFormIsValid()) {
            return;
        }
        AuthorApi.saveAuthor(this.state.author);
        toastr.success('Author saved.');
        this.transitionTo('authors');
    },

    render: function() {
        return (
            <AuthorForm
                author={this.state.author}
                onChange={this.setAuthorState}
                onSave={this.saveAuthor}
                errors={this.state.errors} />
        );
    }
});

module.exports = ManageAuthorPage;
