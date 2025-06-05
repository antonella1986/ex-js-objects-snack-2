const chef = {
	name: "Chef Hyur",
	age: 29,
	makeBurger: (num = 1) => {
		console.log(`Ecco ${num} hamburger per te!`);
	},
}

const restaurant = {
	name: "Hyur's Burgers",
	address: {
		street: 'Main Street',
		number: 123,
	},
	openingDate: new Date(2025, 3, 11),
	isOpen: false,
};

//per clonare l'oggetto chef il metodo migliore è il deep copy JSON.parse(JSON.stringify()), perché lo shallow non va così in profondità (si ferma al primo livello, ovvero name e age), mentre per restaurant è meglio usare lo structuredClone, perché contiene Date (a causa del quale il metodo precedente non funzionerebbe)