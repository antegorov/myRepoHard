'use strict'

const week = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
]
let inner__week = document.querySelector('.inner__week')
let date = new Date()
let todayDay = date.getDay()

for (let key in week) {
	let newDiv = document.createElement('div')
	if (week[key] == 'Sunday' || week[key] == 'Saturday') {
		console.log(week[key].italics())
		newDiv.classList.add('italic')
		newDiv.textContent = week[key]
	}
	if (key == todayDay) {
		console.log(week[key])
		newDiv.classList.add('today')
		newDiv.textContent = week[key]
	}
	console.log(week[key])
	newDiv.textContent = week[key]
	inner__week.appendChild(newDiv)
}
