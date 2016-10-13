// Create an array to hold products
var productArray = [];

// Create product objects to store in the arrray
var productObj0 = {
	name: 25,
	description: "platinum",
	price: 60,
	tier: "images/tier_platinum.png",
	image: "images/25pack.png"
};

productArray.push(productObj0);

var productObj1 = {
	name: 50,
	description: "platinum",
	price: 60,
	tier: "images/tier_platinum.png",
	image: "images/50pack.png"
};

productArray.push(productObj1);

var productObj2 = {
	name: 100,
	description: "platinum",
	price: 60,
	tier: "images/tier_platinum.png",
	image: "images/100pack.png"
};

productArray.push(productObj2);

var productObj3 = {
	name: 25,
	description: "gold",
	price: 60,
	tier: "images/tier_gold.png",
	image: "images/25pack.png"
};

productArray.push(productObj3);

var productObj4 = {
	name: 50,
	description: "gold",
	price: 60,
	tier: "images/tier_gold.png",
	image: "images/50pack.png"
};

productArray.push(productObj4);

var productObj5 = {
	name: 100,
	description: "gold",
	price: 60,
	tier: "images/tier_gold.png",
	image: "images/100pack.png"
};

productArray.push(productObj5);

var productObj6 = {
	name: 25,
	description: "silver",
	price: 60,
	tier: "images/tier_silver.png",
	image: "images/25pack.png"
};

productArray.push(productObj6);

var productObj7 = {
	name: 50,
	description: "silver",
	price: 60,
	tier: "images/tier_silver.png",
	image: "images/50pack.png"
};

productArray.push(productObj7);

var productObj8 = {
	name: 100,
	description: "silver",
	price: 60,
	tier: "images/tier_silver.png",
	image: "images/100pack.png"
};

productArray.push(productObj8);

// get the mainDiv element from the html page
var mainDivz = document.getElementById("mainDiver");

// For loop through the product array and insert the proper HTML in to the DOM
for (var i = 0; i < productArray.length; i++) {

// Every third iteration (except the first time) add another table row
	if (i % 3 === 0 && i !== 0) {
		mainDivz.innerhtml += "<hr>";
	}

// Build card[i]
	mainDivz.innerHTML += "<div class='card' id='card" + i + "'></div>";

// Declare variables needed to produce the HTML
	var card = document.getElementById("card" + i);
	var name = productArray[i].name;
	var description = productArray[i].description;
	var price = productArray[i].price;
	var tier = productArray[i].tier;
	var image = productArray[i].image;
	var packPrice = name * 100;

	console.log (productArray[i].description);


// set tier description and price according to the currect tier level
	if (description === "silver") {
		var tierDesc = "Silver Tier: Basic package delivery.";
		var tierPrice = 25;
	} else if (description === "gold") {
		var tierDesc = "Gold Tier: Language Synergy Assistant, plus Silver Tier perks.";
		var tierPrice = 50;
	} else {
		var tierDesc = "Platinum Tier: Engraved Pen, plus Silver and Gold Tier perks.";
		var tierPrice = 500;
	}

console.log(i);
console.log("desc:", description);
console.log("tier:", tier);
console.log("image:", image);
// add the HTML to the DOM
	card.innerHTML += "<p><img src=" + tier + " style='width:120px;height:120px;margin-right:20px'><img src=" + image + " style='width:120px;height:120px;margin-left:20px'></p>";

	card.innerHTML += "<p>" + tierDesc + "</p>";

	card.innerHTML += "<h1 style='background-color:rgb(12,205, 219)'>$" + (packPrice + tierPrice) + ".99</h1>";
}

// Close last table row tag
// mainDivz.innerHTML += "</tr></tbody>";