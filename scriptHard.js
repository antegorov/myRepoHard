let num = 266219;

let result = 1;
num
	.toString()
	.split("")
	.forEach(function (element) {
		result *= element;
	});

console.log(result);
console.log((result ** 3).toString().substring(0, 2));
