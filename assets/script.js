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

var hourGrab;

var currentHour = moment().hours();

function clock() {
	var now = moment().format("dddd, MMMM Do YYYY, hh:mm:ss A");
	$currentDay.html(now);
	setTimeout(clock, 1000);
}

clock();

function midnight() {
	$("textarea").addClass("future");
	$("textarea").removeClass("present");
	$("textarea").removeClass("past");
}

function present() {
	hourArray[hourGrab].removeClass("future");
	hourArray[hourGrab].removeClass("past");
	hourArray[hourGrab].addClass("present");
}

function past() {
	hourArray[hourGrab - 1].removeClass("future");
	hourArray[hourGrab - 1].removeClass("present");
	hourArray[hourGrab - 1].addClass("past");
}

console.log("current hour is " + currentHour);

function tellTime() {
	switch (currentHour) {
		case 0:
			midnight();
			break;
		case 9:
			hourGrab = hourArray.indexOf($hour9);
			present();
			break;
		case 10:
			hourGrab = hourArray.indexOf($hour10);
			present();
			break;
		case 11:
			hourGrab = hourArray.indexOf($hour11);
			present();
			break;
		case 12:
			hourGrab = hourArray.indexOf($hour12);
			present();
			break;
		case 13:
			hourGrab = hourArray.indexOf($hour13);
			present();
			break;
		case 14:
			hourGrab = hourArray.indexOf($hour14);
			present();

			break;
		case 15:
			hourGrab = hourArray.indexOf($hour15);
			present();
			break;
		case 16:
			hourGrab = hourArray.indexOf($hour16);
			present();
			console.log(hourGrab);

			var poo = hourGrab - 1;
			console.log(poo);
			break;
		case 17:
			hourGrab = hourArray.indexOf($hour17);
			present();
	}
}

tellTime();
