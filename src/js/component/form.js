import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext"; // Ajusta la ruta según tu estructura
import PropTypes from "prop-types";

export const Form = (props) => {
	const { store, actions } = useContext(Context);

	const [fullName, setFullName] = useState("");
	const [email, setEmail]       = useState("");
	const [phone, setPhone]       = useState("");
	const [address, setAddress]   = useState("");
	const { idContact }           = useParams();
	const [currentContact, setCurrentContact] = useState()


	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(handleSubmit)
		await actions.createNewContact({ fullName, phone, email, address})
		await actions.getContactsList()
	};


	return (
		<div className="container justify-content-center">
			<h1 className="text-center">
				{!currentContact ? "Add a new contact" : `Update a contact: ${currentContact.id}`}
			</h1>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="fullName" className="form-label">Full name</label>
					<input
						type="text"
						className="form-control"
						id="fullName"
						placeholder="Enter Full Name"
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}
						required
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">Email address</label>
					<input
						type="email"
						className="form-control"
						placeholder="Enter Email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="phone" className="form-label">Phone</label>
					<input
						type="text"
						className="form-control"
						placeholder="Enter Phone"
						id="phone"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
						required
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="address" className="form-label">Address</label>
					<input
						type="text"
						className="form-control"
						placeholder="Enter Address"
						id="address"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
						required
					/>
				</div>
				<button type="submit" className="btn btn-primary w-100">Save</button>
			</form>
			<Link to="/">
				<button type="button" className="btn btn-link p-0">Or get back to contacts</button>
			</Link>
		</div>

	);
};

Form.propTypes = {
	fullName: PropTypes.string,
	email: PropTypes.string,
	phone: PropTypes.number,
	address: PropTypes.string,
};
