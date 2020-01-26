// Working clock
var $currentDay = $("#currentDay");

var currentHour = moment().hours();

function clock() {
	var now = moment().format("dddd, MMMM Do YYYY, hh:mm:ss A");
	$currentDay.html(now);
	setTimeout(clock, 1000);
}

clock();

console.log(currentHour);
