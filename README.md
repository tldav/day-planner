# day-planner

Work day scheduler created using JavaScript, jQuery, and moment.js

The user lands on a page with numerous time blocks ranging from 9 AM - 5 PM. The color of each time block corresponds with the current hour of the day.

Gray blocks are hours past, green blocks are future hours, and the red block is the current hour. At midnight, all of the blocks default to signal the start of a new day.

All of the time blocks are textareas. The user can schedule their daily activies within each time block. Pressing the save button to the right of each time block will save the user's input for that hour block locally. Locally saved data will be persist through page refresh, tab/browser closures, and machine shutdown/restart.

The clear button will delete all locally saved data.

The deployed application can be found at https://tldav.github.io/day-planner/

![Work Day Scheduler](/assets/js-scheduler.PNG)
