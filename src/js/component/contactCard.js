import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { faEnvelope, faLocationDot, faPencilAlt, faPhoneFlip, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const ContactCard = (props) => {
	const { store } = useContext(Context);

    const [fullName, setFullName] = useState("");
	const [email, setEmail]       = useState("");
	const [phone, setPhone]       = useState("");
	const [address, setAddress]   = useState("");
	const [id, setId]             = useState("");

    const handleEdit = (contact) => {
        // Aquí puedes definir cómo manejar la edición, por ejemplo, mostrar un formulario
        console.log("Editando contacto:", contact);
    };

	const handleSubmit = async (e) => {
		e.preventDefault(); 
		await actions.updateContact({ fullName, phone, email, address, id });
		await actions.getContactsList()

	};

	return (
        <div className="container justify-content-center ">
            <div className="row">
                {store.contacts.length > 0 ? (
                    store.contacts.map((contact, index) => (
                        <div className="row border border-1 p-2" key={index}>
                            <div className="col-md-1 col-sm-6 me-5 ">
                                <img src="https://picsum.photos/id/289/200/300" width="100" height="100"/>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <h5>{contact.name}</h5>
                                <ul className="list-group border-none d-flex align-items-start flex-column p-0" style={{ listStyle: 'none' }}>
                                    <li>
                                        <span><FontAwesomeIcon icon={faLocationDot} className="me-2" />{contact.address}</span> 
                                    </li>
                                    <li>
                                        <span><FontAwesomeIcon icon={faPhoneFlip} className="me-2" />{contact.phone}</span> 
                                    </li>
                                    <li>
                                        <span><FontAwesomeIcon icon={faEnvelope} className="me-2" />{contact.email}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4 col-sm-4">
                                <div className="text-end">
                                    <Link to="/form">
                                    <FontAwesomeIcon icon={faPencilAlt} className="me-5" onClick={() => handleEdit(contact)}  />
                                    </Link>
                                    <FontAwesomeIcon icon={faTrashAlt} className="me-2" />
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12">
                        <p className="list-group-item">No hay contactos disponibles.</p>
                    </div>
                )}
            </div>
        </div>
	);
};

ContactCard.propTypes = {
	fullName: PropTypes.string,
	email: PropTypes.string,
	phone: PropTypes.number,
	address: PropTypes.string,
};
