"use strict";
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

// 1)
let lang;
let ruWeek = [
	"Понедельник",
	"Вторник",
	"Среда",
	"Четверг",
	"Пятница",
	"Суббота",
	"Воскресенье"
];

let enWeek = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday"
];

function langOptionIf() {
	do {
		lang = prompt('Укажите значение переменной "lang"', '"ru" / "en" ');
	} while (lang !== "ru" && lang !== "en");

	if (lang === "ru") {
		for (let i = 0; i < ruWeek.length; i++) {
			console.log(ruWeek[i]);
		}
		return;
	} else {
		for (let i = 0; i < enWeek.length; i++) {
			console.log(enWeek[i]);
		}
		return;
	}
}
function langOptionSwitch() {
	do {
		lang = prompt('Укажите значение переменной "lang"', '"ru" / "en" ');
	} while (lang !== "ru" && lang !== "en");

	switch (true) {
		case lang == "ru":
			for (let i = 0; i < ruWeek.length; i++) {
				console.log(ruWeek[i]);
			}
			break;
		case lang == "en":
			for (let i = 0; i < enWeek.length; i++) {
				console.log(enWeek[i]);
			}
			break;
	}
}

function langOptionArray() {
	do {
		lang = prompt('Укажите значение переменной "lang"', '"ru" / "en" ');
	} while (lang !== "ru" && lang !== "en");

	let weeksArray = [];
	weeksArray["ru"] = ruWeek;
	weeksArray["en"] = enWeek;

	for (let i = 0; i < weeksArray[lang].length; i++) {
		console.log(weeksArray[lang][i]);
	}
}

//a
//langOption();

//b
//langOptionSwitch();

//c
//langOptionArray();

// 2)
function namePersonChange() {
	let namePerson = prompt("Введите имя");
	namePerson == "Артем"
		? console.log("директор")
		: namePerson == "Александр"
		? console.log("преподаватель")
		: console.log("студент");
}

namePersonChange();
