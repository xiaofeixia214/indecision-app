var nameVar = 'Ruofei';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName() {
	const petName = 'Dumbo';
	return petName;
}

const petName = getPetName();
console.log(petName);

// Block scroping
const fullName = 'Ruofei Xie';
let firstName;
if (fullName) {
	firstName = fullName.split(' ')[0];
	console.log(firstName);
}

console.log(firstName);