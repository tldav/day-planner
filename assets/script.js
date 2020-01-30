// DOM Variables
var $currentDay = $("#currentDay");
var $start = $("#start");
var $hour9 = $("#hour-9");
var $hour10 = $("#hour-10");
var $hour11 = $("#hour-11");
var $hour12 = $("#hour-12");
var $hour13 = $("#hour-13");
var $hour14 = $("#hour-14");
var $hour15 = $("#hour-15");
var $hour16 = $("#hour-16");
var $hour17 = $("#hour-17");
var $saveBtn = $(".saveBtn");
var $btn9 = $("#btn-9");
var $btn10 = $("#btn-10");
var $btn11 = $("#btn-11");
var $btn12 = $("#btn-12");
var $btn13 = $("#btn-13");
var $btn14 = $("#btn-14");
var $btn15 = $("#btn-15");
var $btn16 = $("#btn-16");
var $btn17 = $("#btn-17");
var $clearBtn = $("#clearBtn");

// Array of hours. The placeholder items sync the array index with the current hour.
var hourArray = [
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	$start,
	$hour9,
	$hour10,
	$hour11,
	$hour12,
	$hour13,
	$hour14,
	$hour15,
	$hour16,
	$hour17
];

// Global Variables
var getHour = 0;
// Targets current hour with moment.js
var currentHour = moment().hours();

// Realtime date and time display
function clock() {
	var now = moment().format("dddd, MMMM Do YYYY, hh:mm:ss A");
	$currentDay.html(now);
	setTimeout(clock, 1000);
}

clock();

// Keeps all timeblocks green between midnight and 9 AM
function newDay() {
	$("textarea").addClass("future");
	$("textarea").removeClass("present");
	$("textarea").removeClass("past");
}

// Keeps all timeblocks gray between 6 PM and midnight
function afterHours() {
	$("textarea").removeClass("future");
	$("textarea").removeClass("present");
	$("textarea").addClass("past");
}

// Handles the color change of each row
function colorChange() {
	newDay();

	// Changes the row for each hour to red when the current time is within that hour
	hourArray[getHour].removeClass("future");
	hourArray[getHour].removeClass("past");
	hourArray[getHour].addClass("present");

	// Loops through all past hours and turns their rows gray
	for (var i = getHour - 1; i > 0; i--) {
		hourArray[i].removeClass("future");
		hourArray[i].removeClass("present");
		hourArray[i].addClass("past");

		// Ensures that the backwards loop doesn't try to target the placeholder array items, which will cause an error since classes cannot be added to them.
		if (i <= 9) {
			return;
		}
	}
}

// Tracks the hour of the day and targets the appropriate timeblock for color change
function timeChange() {
	switch (currentHour) {
		default:
			newDay();
			break;
		case 9:
			getHour = hourArray.indexOf($hour9);
			colorChange();
			break;
		case 10:
			getHour = hourArray.indexOf($hour10);
			colorChange();
			break;
		case 11:
			getHour = hourArray.indexOf($hour11);
			colorChange();
			break;
		case 12:
			getHour = hourArray.indexOf($hour12);
			colorChange();
			break;
		case 13:
			getHour = hourArray.indexOf($hour13);
			colorChange();
			break;
		case 14:
			getHour = hourArray.indexOf($hour14);
			colorChange();
			break;
		case 15:
			getHour = hourArray.indexOf($hour15);
			colorChange();
			break;
		case 16:
			getHour = hourArray.indexOf($hour16);
			colorChange();
			break;
		case 17:
			getHour = hourArray.indexOf($hour17);
			colorChange();
			break;
		case 18:
		case 19:
		case 20:
		case 21:
		case 22:
		case 23:
			afterHours();
	}
}

timeChange();

// Clears local storage and all text boxes by refreshing the page.
$clearBtn.on("click", function() {
	localStorage.clear();
	location.reload();
});

function local9() {
	var savedInput = localStorage.getItem("input9");

	$hour9.text(savedInput);
}

function local10() {
	var savedInput = localStorage.getItem("input10");

	$hour10.text(savedInput);
}

function local11() {
	var savedInput = localStorage.getItem("input11");

	$hour11.text(savedInput);
}

function local12() {
	var savedInput = localStorage.getItem("input12");

	$hour12.text(savedInput);
}

function local13() {
	var savedInput = localStorage.getItem("input13");

	$hour13.text(savedInput);
}

function local14() {
	var savedInput = localStorage.getItem("input14");

	$hour14.text(savedInput);
}

function local15() {
	var savedInput = localStorage.getItem("input15");

	$hour15.text(savedInput);
}

function local16() {
	var savedInput = localStorage.getItem("input16");

	$hour16.text(savedInput);
}

function local17() {
	var savedInput = localStorage.getItem("input17");

	$hour17.text(savedInput);
}

local9();
local10();
local11();
local12();
local13();
local14();
local15();
local16();
local17();

$btn9.on("click", function(e) {
	e.preventDefault();
	e.stopPropagation();

	var textarea = $btn9.prev();
	console.log(textarea);

	var userInput = textarea.val();

	localStorage.setItem("input9", userInput);
	local9();
});

$btn10.on("click", function(e) {
	e.preventDefault();
	e.stopPropagation();

	var textarea = $btn10.prev();
	console.log(textarea);

	var userInput = textarea.val();

	localStorage.setItem("input10", userInput);
	local9();
});

$btn11.on("click", function(e) {
	e.preventDefault();
	e.stopPropagation();

	var textarea = $btn11.prev();
	console.log(textarea);

	var userInput = textarea.val();

	localStorage.setItem("input11", userInput);
	local9();
});

$btn12.on("click", function(e) {
	e.preventDefault();
	e.stopPropagation();

	var textarea = $btn12.prev();
	console.log(textarea);

	var userInput = textarea.val();

	localStorage.setItem("input12", userInput);
	local9();
});

$btn13.on("click", function(e) {
	e.preventDefault();
	e.stopPropagation();

	var textarea = $btn13.prev();
	console.log(textarea);

	var userInput = textarea.val();

	localStorage.setItem("input13", userInput);
	local9();
});

$btn14.on("click", function(e) {
	e.preventDefault();
	e.stopPropagation();

	var textarea = $btn14.prev();
	console.log(textarea);

	var userInput = textarea.val();

	localStorage.setItem("input14", userInput);
	local9();
});

$btn15.on("click", function(e) {
	e.preventDefault();
	e.stopPropagation();

	var textarea = $btn15.prev();
	console.log(textarea);

	var userInput = textarea.val();

	localStorage.setItem("input15", userInput);
	local9();
});

$btn16.on("click", function(e) {
	e.preventDefault();
	e.stopPropagation();

	var textarea = $btn16.prev();
	console.log(textarea);

	var userInput = textarea.val();

	localStorage.setItem("input16", userInput);
	local9();
});

$btn17.on("click", function(e) {
	e.preventDefault();
	e.stopPropagation();

	var textarea = $btn17.prev();
	console.log(textarea);

	var userInput = textarea.val();

	localStorage.setItem("input17", userInput);
	local9();
});

/*****************************************
 * Failed attempt at DRY code
 * 

// var saveData = [];

// function renderLocal() {
// 	var savedInput = localStorage.getItem("input");

// 	$hour9.text(savedInput);
// 	$hour10.text(savedInput);
// 	$hour11.text(savedInput);
// 	$hour12.text(savedInput);
// 	$hour13.text(savedInput);
// 	$hour14.text(savedInput);
// 	$hour15.text(savedInput);
// 	$hour16.text(savedInput);
// 	$hour17.text(savedInput);
// }

// renderLocal();

// $saveBtn.on("click", function(e) {
// 	e.preventDefault();

// 	var targetBtn = $(e.target);
// 	var textarea = targetBtn.prev();

// 	console.log(textarea);

// 	var userInput = textarea.val();

// 	localStorage.setItem("input", userInput);
// 	renderLocal();

// 	console.log(userInput);
// });
*/
