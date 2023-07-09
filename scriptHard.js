'use strict'

let variable = 5
let newVar

const strOption = function (variable) {
	if (typeof variable == 'string') {
		newVar = variable.replace(/^ +| +$/g, '')
		if (variable.length > 30) newVar = newVar.slice(0, 30) + '...'
	} else {
		newVar = 'Это не строка'
	}
	return newVar
}

strOption(variable)

console.log(newVar)
