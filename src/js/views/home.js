import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Context } from "../store/appContext";
import { Buttom } from "../component/buttom";
import "../../styles/home.css";

export const Home = () => {
	const { store } = useContext(Context);

	return (
		<div className="container justify-content-center">
			<Buttom />
			<ul className="list-group border-none">
				{store.contacts.length > 0 ? (
					store.contacts.map((contact, index) => (
						<li key={index} className="list-group-item d-flex justify-content-between align-items-center">
							<p className="mb-0">{contact.name}</p>
							<p className="mb-0">{contact.phone}</p>
							<p className="mb-0">{contact.address}</p>
							<p className="mb-0">{contact.email}</p>
							<div>
								<FontAwesomeIcon icon={faPencilAlt} className="me-5" />
								<FontAwesomeIcon icon={faTrashAlt} />
							</div>
						</li>
					))
				) : (
					<li className="list-group-item">No hay contactos disponibles.</li>
				)}
			</ul>
		</div>
	);
};
