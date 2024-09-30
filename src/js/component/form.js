import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext"; // Ajusta la ruta según tu estructura
import PropTypes from "prop-types";

export const Form = (props) => {
	const { actions } = useContext(Context);

	const [fullName, setFullName] = useState("");
	const [email, setEmail]       = useState("");
	const [phone, setPhone]       = useState("");
	const [address, setAddress]   = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault(); // Evita el comportamiento por defecto del formulario
		if (fullName == "") return
		// Crear un nuevo contacto
		await actions.createNewContact({ fullName, phone, email, address });
		await actions.getContactsList()

	};

	return (
		<div className="container justify-content-center">
			<h1 className="text-center">Add a new contact</h1>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="FullName" className="form-label">Full name</label>
					<input
						type="text"
						className="form-control"
						id="FullName"
						placeholder="Enter Full Name"
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}
						aria-describedby="emailHelp"
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="Email" className="form-label">Email address</label>
					<input
						type="email"
						className="form-control"
						placeholder="Enter Email"
						id="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="Phone" className="form-label">Phone</label>
					<input
						type="text"
						className="form-control"
						placeholder="Enter Phone"
						id="Phone"
						value={phone}
						onChange={(e) => setPhone(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="Address" className="form-label">Address</label>
					<input
						type="text"
						className="form-control"
						placeholder="Enter Address"
						id="Address"
						value={address}
						onChange={(e) => setAddress(e.target.value)}
					/>
				</div>
				<button type="submit" className="btn btn-primary w-100">save</button>
			</form>
			<Link to="/">
					<button type="button" className="btn btn-link p-0">or get back to contacts</button>
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
