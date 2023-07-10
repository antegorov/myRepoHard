'use strict'

let arr = []
arr.push(12000, 87400, 432, 5210, 220, 14, 2600)

console.log('\nИсходный массив:')
for (let i = 0; i < arr.length; i++) console.log(arr[i])

console.log('\nЗначения массива, которые начинаются с цифры 2 или 4:')
for (let i = 0; i < arr.length; i++) {
	if (String(arr[i]).search(/(2|4)/) === 0) console.log(arr[i])
}

console.log('\nПростые число от 1 до 100:')
for (let i = 2; i < 101; i++) {
	let count = 0
	for (let j = 2; j < i; j++) {
		if (i % j == 0) count++
	}
	if (count < 2) console.log(i + '\tДелители этого числа: 1 и ' + i)
}
