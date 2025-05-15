// vytvorime objekty reprezentujuce udaje 
// - typy kav so zakladnou cenou /pre malu kavu/
var columbian = {
	name: 'columbian',
	basePrice: 5
};
var frenchRoast = {
	name: 'french roast',
	basePrice: 8
};
var decaf = {
	name: 'decaf',
	basePrice: 6
};

// zadefinujeme funkciu, ktora vypocita cenu kavy na zaklade jej velkosti,
// plus "vypiseme" kavu s cenou
function printPrice(coffee, size) {
	if (size == 'small') {
		var price = coffee.basePrice;
	}
	else if (size == 'medium') {
		var price = coffee.basePrice + 4;
	}
	else {
		var price = coffee.basePrice + 6;
	}

	// "vypiseme" kavu s cenou 
	// - vytvorime li element a pripojime k zoznamu produktov (<ul id="products">)
	var node = document.createElement("li");
	var label = coffee.name + ' ' + size;
	var textnode = document.createTextNode(label+' price: $'+price);
	node.appendChild(textnode);
	document.getElementById('products').appendChild(node);
}

// zavolame funkciu printPrice pre vsetky kombinacie kav a ich velkosti
printPrice(columbian, 'small');
printPrice(columbian, 'medium');
printPrice(columbian, 'large');
printPrice(frenchRoast, 'small');
printPrice(frenchRoast, 'medium');
printPrice(frenchRoast, 'large');
printPrice(decaf, 'small');
printPrice(decaf, 'medium');
printPrice(decaf, 'large');