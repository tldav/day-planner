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
	hourArray[getHour].removeClass("future");
	hourArray[getHour].removeClass("present");
	hourArray[getHour].addClass("past");
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
