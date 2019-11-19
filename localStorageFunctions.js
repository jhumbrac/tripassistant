//localStorage.clear()

var tDates = [], tID;   //variables to pass values to object
var tripsArr = [];      //object for local storage

//function to extract user date input for getDates function
function getDatesArray(event){

    //Extract date elements from Start Date
    var startDate = new Date($('#dStart').val());
    var startDay = startDate.getDate();
    var startMonth = startDate.getMonth() + 1;
    var startYear = startDate.getFullYear();
    
    //Extract date elements from End Date
    var endDate = new Date($('#dEnd').val());
    var endDay = endDate.getDate();
    var endMonth = endDate.getMonth() + 1;
    var endYear = endDate.getFullYear();
    
    //Call function that will create array of dates
    var dates = getDates(new Date(startYear,startMonth,startDay), new Date(endYear,endMonth,endDay));                                                                                                           
    dates.forEach(function(date) {
    //Add individual dates to dates array
    tDates.push(date); 
    })
};

//Function to create array of dates
var getDates = function(startDate, endDate) {
    var dates = [],
        currentDate = startDate,
        addDays = function(days) {
          var date = new Date(this.valueOf());
          date.setDate(date.getDate() + days);
          return date;
        };
    while (currentDate <= endDate) {
      dates.push(currentDate);
      currentDate = addDays.call(currentDate, 1);
    }
    return dates;
};

//function to store tripID
function getTripID(event) {
    var startDate = new Date($('#dStart').val());
    var startDay = startDate.getDate();
    var startMonth = startDate.getMonth() + 1;
    var startYear = startDate.getFullYear();
        tID = $("#city").val() + "-" + startYear + startMonth + startDay;//this line creates the tripID
}

//on click event to create a new trip object
$("#newbtn").on("click", function(event) {
    event.preventDefault();
    getTripID(event);
    getDatesArray(event);
    tripsArr = localStorage.getItem("trips");
    tripsArr = tripsArr ? JSON.parse(tripsArr) : [];
    var trip = {
                tripID : tID,
                tripDates : tDates
                }
    tripsArr.push(trip);
    localStorage.setItem("trips", JSON.stringify(tripsArr));
})

/*
    itinerary []
                date:
                activities: []
*/

var actArr = [];
var userInputDay = "12/20/2019";
var userInputAct = [];

//function to retrieve user input activities to add
function getUserActivities(event) {
    var newToDo = ($('#tDo').val());
    var newToEat = ($('#tEat').val());
    userInputAct.push(newToDo);
    userInputAct.push(newToEat);
}

//on click event to add activities to itinerary object
$("#actbtn").on("click", function(event) {
    event.preventDefault();
    getUserActivities(event);
    actArr = localStorage.getItem("activities");
    actArr = actArr ? JSON.parse(actArr) : [];
    var actEntry = {
                tDay : userInputDay,
                activities : userInputAct
                }
    actArr.push(actEntry);
    localStorage.setItem("itinerary", JSON.stringify(actArr));
})