// arguments object - no longer bound with arrow functions
// no longer have access to arguments inside arrow function
const add = (a, b) => {
	return a + b;
}

console.log(add(55, 1, 1001));

// this keyword - no longer bound with arrow functions

// const user = {
// 	name: 'Ruofei',
// 	cities: ['San Jose', 'San Mateo', 'Fremont'],
// 	printPlacesLived: function() {
// 		const that = this;
// 		this.cities.forEach(function(city) {
// 			console.log(that.name + ' has lived in ' + city);
// 		});
// 	}
// };

const user = {
	name: 'Ruofei',
	cities: ['San Jose', 'San Mateo', 'Fremont'],
	printPlacesLived() {
		// this.cities.forEach((city) => {
		// 	console.log(this.name + ' has lived in ' + city);
		// });
		return this.cities.map((city) => this.name + ' has lived in ' + city);
	}
};

console.log(user.printPlacesLived());


// Challenge area
const multiplier = {
	// numbers - array of numbers
	// multiplyBy - single number
	// multiply - return a new array where the number have been multiplied
	numbers: [10, 20, 30],
	multiplyBy: 3,
	multiply() {
		return this.numbers.map((number) => number * this.multiplyBy);
	}
};

console.log(multiplier.multiply());