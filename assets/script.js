// DOM Variables
var $currentDay = $("#currentDay");
var $hour9 = $("#hour-9");
var $hour10 = $("#hour-10");
var $hour11 = $("#hour-11");
var $hour12 = $("#hour-12");
var $hour13 = $("#hour-13");
var $hour14 = $("#hour-14");
var $hour15 = $("#hour-15");
var $hour16 = $("#hour-16");
var $hour17 = $("#hour-17");

// Array of hours
var hourArray = [
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
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
var hourGrab = 0;

var currentHour = moment().hours();

// Realtime date and time display
function clock() {
	var now = moment().format("dddd, MMMM Do YYYY, hh:mm:ss A");
	$currentDay.html(now);
	setTimeout(clock, 1000);
}

clock();

function newDay() {
	$("textarea").addClass("future");
	$("textarea").removeClass("present");
	$("textarea").removeClass("past");
}

function hourChange() {
	newDay();
	hourArray[hourGrab].removeClass("future");
	hourArray[hourGrab].removeClass("past");
	hourArray[hourGrab].addClass("present");
	for (i = hourGrab - 1; i > 0; i--) {
		hourArray[i].removeClass("future");
		hourArray[i].removeClass("present");
		hourArray[i].addClass("past");

		if (i <= 9) {
			return;
		}
	}
}

console.log("current hour is " + currentHour);

function tellTime() {
	switch (currentHour) {
		case 9:
			hourGrab = hourArray.indexOf($hour9);
			hourChange();
			break;
		case 10:
			hourGrab = hourArray.indexOf($hour10);
			hourChange();
			break;
		case 11:
			hourGrab = hourArray.indexOf($hour11);
			hourChange();
			break;
		case 12:
			hourGrab = hourArray.indexOf($hour12);
			hourChange();
			break;
		case 13:
			hourGrab = hourArray.indexOf($hour13);
			hourChange();
			break;
		case 14:
			hourGrab = hourArray.indexOf($hour14);
			hourChange();
			break;
		case 15:
			hourGrab = hourArray.indexOf($hour15);
			hourChange();
			break;
		case 16:
			hourGrab = hourArray.indexOf($hour16);
			hourChange();
			console.log(hourGrab);
			break;
		case 17:
			hourGrab = hourArray.indexOf($hour17);
			hourChange();
		default:
			newDay();
	}
}

tellTime();
