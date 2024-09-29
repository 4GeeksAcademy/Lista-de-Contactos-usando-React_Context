const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},

		actions: {
			getContactsList: async () => {
				let resp = await fetch("https://playground.4geeks.com/contact/agendas/juanpablo", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					}
				});
				if (resp.status === 404) {
					await fetch("https://playground.4geeks.com/contact/agendas/juanpablo", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						}
					});
				}
				if (resp.status === 200) {
					let data = await resp.json();
					console.log({ data });
					setStore({contacts:data});
				}
			},
			createNewContact: async () => {
				let resp = await fetch("https://playground.4geeks.com/contact/agendas/juanpablo/contacts", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ 
						"name": "{ variable }",
						"phone": "{ variable }",
						"email": "{ variable }",
						"address": "{ variable }"
					})
				});
				if (resp.status === 404) {
					console.log("No se puede crear el contacto")
				}
				if (resp.status === 200) {
					let data = await resp.json();
					console.log({ data });
					setStore({contacts:data});
				}
			},
			updateContact: async () => {
				let resp = await fetch("https://playground.4geeks.com/contact/agendas/juanpablo", {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ 
						"name": "{ variable }",
						"phone": "{ variable }",
						"email": "{ variable }",
						"address": "{ variable }"
					})
				});
				if (resp.status === 404) {
					await fetch("https://playground.4geeks.com/contact/agendas/juanpablo", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						}
					});
				}
				if (resp.status === 200) {
					let data = await resp.json();
					console.log({ data });
					setStore({contacts:data});
				}
			},
			deleteContact: async (id) => {
				let resp = await fetch(`https://playground.4geeks.com/contact/agendas/juanpablo/contacts/${id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					}
				});
				if (resp.status === 404) {
					console.log("No se puede eliminar el contacto")
				}
				if (resp.status === 200) {
					let data = await resp.json();
					console.log({ data });
					setStore({contacts:data});
				}
			},
		},
	};
};

export default getState;
