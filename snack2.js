const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
    //proprietà di primo livello
	ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = {...hamburger}; //abbiamo creato una shallow copy di hamburger (clona le proprietà di primo livello)
secondBurger.ingredients[0] = "Salad"; //abbiamo modificato il primo ingrediente, cioè Cheese

console.log(hamburger.ingredients[0]); // 'Salad'
console.log(secondBurger.ingredients[0]); // 'Salad', perché vengono copiate solo le proprietà di primo livello dell'oggetto con lo spread, e il valore di quella proprietà è un array, e l'array è un oggetto complesso. le proprietà annidate vengono copiate come RIFERIMENTO, e modificare una proprietà annidata nell'oggetto copiato modifica anche l'originale

//QUINDI sono stati creati due oggetti in memoria, ma uno contiene ancora un riferimento condiviso