
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Milk",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		price: 2.99
	},
	{
		name: "Cheese",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		price: 3.99
	},
	{
		name: "Peanut Butter",
		lactoseFree: true,
		nutFree: false,
		organic: true,
		price: 3.50
	},
	{
		name: "Almonds",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		price: 0.99
	},
	{
		name: "Tomatoes",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 0.50
	},
	{
		name: "Apples",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 0.85
	},
	{
		name: "Beef",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 3.80
	},
	{
		name: "Cereal",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		price: 3.60
	},
	{
		name: "Lettuce",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		price: 1.20
	},
	{
		name: "Eggs",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		price: 2.30
	},
	{
		name: "Vegetarian Bundle: Salad, Tofu, Beans, Almond Milk",
		lactoseFree: true,
		nutFree: false,
		organic: true,
		price: 15.33
	},
	{
		name: "Organic Deluxe Bundle: Potatoes, Carrots, Apples, Pork",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		price: 10.40
	},
	{
		name: "Italian Bundle: Spaghetti, Meatballs, Pasta Sauce, Cheese",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		price: 20.99
	},
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	// sorting products by price
	products.sort((a, b) => (a.price > b.price) ? 1 : -1);
	// checking restrictions
	for (let i = 0; i < prods.length; i += 1) {
		if ((restriction == "lactose free") && (prods[i].lactoseFree == true)) {
			product_names.push(prods[i]);
		}
		else if ((restriction == "nut free") && (prods[i].nutFree == true)) {
			product_names.push(prods[i]);
		}
		else if ((restriction == "organic") && (prods[i].organic == true)) {
			product_names.push(prods[i]);
		}
		else if (restriction == "None") {
			product_names.push(prods[i]);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i = 0; i < products.length; i += 1) {
		if (chosenProducts.indexOf(products[i].name) > -1) {
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}