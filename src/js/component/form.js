import React, { Component } from "react";
import { Link } from "react-router-dom";

//include images into your bundle
import PropTypes from "prop-types";

export const Form = (props) => (
	<div className="container justify-content-center">
		<h1 className="text-center">Add a new contact</h1>
		<form>
			<div className="mb-3">
				<label htmlFor="FullName" className="form-label" >Full name</label>
				<input type="text" className="form-control" id="FullName" placeholder="Enter Full Name" aria-describedby="emailHelp" />
			</div>
			<div className="mb-3">
				<label htmlFor="Email" className="form-label">Email address</label>
				<input type="email" className="form-control" placeholder="Enter Email" id="Email" />
			</div>
			<div className="mb-3">
				<label htmlFor="Phone" className="form-label">Phone</label>
				<input type="text" className="form-control" placeholder="Enter Phone" id="Phone" />
			</div>
			<div className="mb-3">
				<label htmlFor="Address" className="form-label">Address</label>
				<input type="text" className="form-control" placeholder="Enter Address" id="Address" />
			</div>
			<button type="submit" className="btn btn-primary w-100">save</button>
            <Link to="/home">
				<button type="button" className="btn btn-link p-0">or get back to contacts</button>
            </Link>
		</form>
	</div>
);

Form.propTypes = {
        name: PropTypes.string,
};