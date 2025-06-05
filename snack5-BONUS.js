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

//usando lo spread, newRestaurant è un nuovo oggetto in memoria, perché restaurant è un oggetto non annidato
const newRestaurant = {...hamburger.maker.restaurant};
//quindi sarebbe tipo:
/*/const newRestaurant = {
        name: "Cheese Burger", 
        weight: 250,
        maker: {
            name: "Hyur's II",
            address: "Second Street, 12",
            isOpen: true
        }
        age: 29
};*/
//perché il name e l'address vengono sostituiti con i valori di newRestaurant.name e newRestaurant.address sotto
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";

const secondBurger = {...hamburger};
//ho sostituito l'intero oggetto restaurant dentro secondBurger
//ora hamburger.maker.restaurant e secondBurger.maker.restaurant sono oggetti DIVERSI
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

console.log(hamburger.maker.name); // 'Chef Hyur' perché maker è condiviso con secondBurger (che è stato sovrascritto)
console.log(secondBurger.maker.name); // 'Chef Hyur'
console.log(hamburger.maker.restaurant.name); // 'Hyur's Burgers' mai toccato
console.log(secondBurger.maker.restaurant.name); // 'Hyur's II' perché l'ho sovrascritto



//mo ho fame ma sono a dieta, mannaggia a voi