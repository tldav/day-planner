// Working clock
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

var currentHour = moment().hours();

function clock() {
	var now = moment().format("dddd, MMMM Do YYYY, hh:mm:ss A");
	$currentDay.html(now);
	setTimeout(clock, 1000);
}

clock();

console.log(currentHour);

function turn9() {
	$hour9.removeClass("past");
	$hour9.addClass("present");
}

function tellTime() {
	switch (currentHour) {
		case 22:
			turn9();
			console.log("It's 10 o'clock");
			break;
		case 23:
			console.log("It's 11 o'clock");
			break;
		case 24:
			console.log("It's 12 o'clock");
	}
}

tellTime();
