const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	maker: {
		name: "Anonymous Chef",
		restaurant: {
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

//gli oggetti creati in memoria sono tre diversi, sebbene abbiamo gli stessi valori, perché il primo oggetto è stato copiato due volte come due deep copies (esclusi gli oggetti annidati)