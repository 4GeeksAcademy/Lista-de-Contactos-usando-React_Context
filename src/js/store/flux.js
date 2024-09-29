const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},

		actions: {
			getContactsList: async () => {
				let resp = await fetch("https://playground.4geeks.com/contact/agendas/juanpablo/{$id}", {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: {
						"name": "{ variable }",
						"phone": "{ variable }",
						"email": "{ variable }",
						"address": "{ variable }"
					  }
				});
				if (resp.ok) {
					let data = await resp.json();
					console.log({ data });
					setStore({contacts:data});
				}
			},
			createNewContact: () => {

			},
			updateContact: async () => {
				let resp = await fetch("https://playground.4geeks.com/contact/agendas/juanpablo", {
					method: "PUT",
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
			deleteContact: () => {

			},
		}
	};
};

export default getState;