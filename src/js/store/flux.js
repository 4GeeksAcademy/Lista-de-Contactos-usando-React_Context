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
			createNewContact: () => {

			},
			updateContact: () => {

			},
			deleteContact: () => {

			},
		}
	};
};

export default getState;
