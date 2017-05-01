"use strict";

var React = require('react');

var AuthorForm = React.createClass({
    render: function() {
        return (
            <form action="">
                <h1>Manage Author</h1>
                <label htmlFor="firstName">First Name</label>
                <input type="text"
                    className="form-control"
                    placeholder="First Name"
                    ref="firstName"
                    value="" />
                <br/>

                <label htmlFor="lastName">Last Name</label>
                <input type="text"
                    className="form-control"
                    placeholder="Last Name"
                    ref="lastName"
                    value="" />
                <br/>
                <input type="submit" value="Save" className="btn btn-default"/>
            </form>
        );
    }
});

module.exports = AuthorForm;