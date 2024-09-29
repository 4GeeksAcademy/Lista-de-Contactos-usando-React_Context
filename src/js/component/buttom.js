import React, { Component } from "react";
import { Link } from "react-router-dom";

//include images into your bundle
import PropTypes from "prop-types";

export const Buttom = (props) => (
    <div className="container mb-3 d-flex justify-content-end">
        <Link to="/form">
            <button type="button" className="btn btn-success ">Add new contact</button>
        </Link>
    </div>


);

Buttom.propTypes = {
        name: PropTypes.string,
};