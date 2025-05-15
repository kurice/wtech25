// zatial co pri imperativnom programovani potrebujeme uviest krok za krokom
// co sa ma spravit, aby sa vyriesil dany problem
// pri deklarativnom programovani sa zameriavame na matematicky opis problemu 
// teda skor co sa ma spravit a nie ako, zvysok - ako je ponechany na interpretera


// oddelime data a logiku
var printPrice = function(price, label) {
	var node = document.createElement("li");
	var textnode = document.createTextNode(label+' price: $'+price);
	node.appendChild(textnode);
	document.getElementById('products').appendChild(node);
}

// pre kazdy typ kavy vytvorime objekty
var columbian = function(){
	this.name = 'columbian';
	this.basePrice = 5;
};
var frenchRoast = function(){
	this.name = 'french roast';
	this.basePrice = 8;
};
var decaf = function(){
	this.name = 'decaf';
	this.basePrice = 6;
};


// pre kazdu velkost vytvorime objekty
var small = {
	getPrice: function(){return this.basePrice},
	getLabel: function(){return this.name + ' small'}
};
var medium = {
	getPrice: function(){return this.basePrice + 4},
	getLabel: function(){return this.name + ' medium'}
};
var large = {
	getPrice: function(){return this.basePrice + 6},
	getLabel: function(){return this.name + ' large'}
};

// vytvorime pole typov kav a pole velkosti
var coffeeTypes = [columbian, frenchRoast, decaf];
var coffeeSizes = [small, medium, large];


// vytvorime objekty, ktore su kombinaciou vsetkych typov a velkosti kav
// vratime pole tychto objektov
var coffees = coffeeTypes.reduce(function(previous, current) {
	var newCoffee = coffeeSizes.map(function(mixin) {
		var newCoffeeObj = plusMixin(current, mixin);
		return new newCoffeeObj();
	});
	return previous.concat(newCoffee);
},[]);

// vypiseme kavy s cenou
coffees.forEach(function(coffee){
	printPrice(coffee.getPrice(),coffee.getLabel());
});

// pri imperativnom sme prense povedali co a ako sa to ma spravit krok za krokom, 
// aj explicitne kombinacie ... tento typ tato velkost, tento typ tato velkost ...
// pri deklarativnom sme zadefinovali funkcie pre typy, velkosti a povedali co sa ma spravit 
// - teda vytvorit vsetky kombinacie

// riesenie cez FP je viac modularne
var peruvian = function(){
	this.name = 'peruvian';
	this.basePrice = 11;
};

var extraLarge = {
	getPrice: function(){return this.basePrice + 10},
	getLabel: function(){return this.name + ' extra large'}
};

coffeeTypes.push(Peruvian);
coffeeSizes.push(extraLarge);
