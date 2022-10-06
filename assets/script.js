var currentDate = "";
var currentDateString = "";
var currentHour = "9";
var timeEntries = [];

const timeEntriesName = "workDaySchedulerList"; 
const firstEntry = 9; 
const lastEntry = 17; 
const hourMap = ["12AM","1AM","2AM","3AM","4AM","5AM","6AM","7AM","8AM","9AM","10AM","11AM","12PM",
                "1PM","2PM","3PM","4PM","5PM","6PM","7PM","8PM","9PM","10PM","11PM"]; 

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", 
                "July", "August", "September", "October", "November", "December"];

setCurrentDateAndHour();
buildTimeBlocks(); 
getTimeEntries(); 

$(".saveBtn").click(saveClick); 

function setCurrentDateAndHour() {
    var today = new Date(); 
    var day = today.getDate();
    var dayEnd = "th"; 

    currentHour = today.getHours(); 

    if (day < 10) {
        currentDate = today.getFullYear() + months[today.getMonth()] + "0" + day; 
    }
    else {
        currentDate = today.getFullYear() + months[today.getMonth()] + day;
    }

    currentDateString = days[today.getDay()] + ", " + months[today.getMonth()] + " " + 
        day + dayEnd + ", " + today.getFullYear(); 
    $("#currentDay").text(currentDateString); 
}

