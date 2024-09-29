import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import "../../styles/home.css";

export const Home = () => (
	<div className="container justify-content-center">
		<ul className="list-group border-none">
			<li className="list-group-item d-flex justify-content-between align-items-center">
				<p className="mb-0">Prueba</p>
				<div>
					<FontAwesomeIcon icon={faPencilAlt} className="me-5" />
					<FontAwesomeIcon icon={faTrashAlt} />
				</div>
			</li>
		</ul>
	</div>
);
