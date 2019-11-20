$(document).ready(function(){
// landing page dom
var welcomePage = $('<div>').attr('id', 'welcomePage');
var welcomeText = $('<h1>').text('Plan your trip');
var welcomeSubText = $('<p>').text('Click to start a new trip or select from one of your upcoming trips');
var newTripBtn = $('<button>').attr('id', 'newTripBtn').text('Create a new itinerary');
var upcomingTripsDisplay = $('<div>').attr('id', 'upcomingTripsDisplay');
var upcomingTripsHeader = $('<h2>').attr('id', 'upcomingTripsHeader').text('Upcoming Trips');

$('body').prepend(welcomePage);
welcomePage.append(welcomeText, welcomeSubText, newTripBtn, upcomingTripsDisplay);

// close button
var closeBtn = $('<p>').attr('class', 'closeBtn').append($('<span>').text('X'));
var formLine = $(`<svg class="graphic" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
<path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
</svg>`);

// new trip input
var tripInput = $('<form>').attr('id', 'tripInput');
var tripInputDiv1 = $('<div>');
var tripInputDiv2 = $('<div>');
var tripInputDiv3 = $('<div>');
var tripLocation = $('<input>').attr('type', 'text').attr('id', 'tripLocation').attr('required', 'true');
var locationLabel = $('<label>').attr('for', 'tripLocation').text('Where are you going?');
var tripStartDate = $('<input>').attr('type', 'date').attr('id', 'tripStartDate').attr('required', 'true');
var tripStartLabel = $('<label>').attr('for', 'tripStartDate').text('Trip Start');
var tripEndDate = $('<input>').attr('type', 'date').attr('id', 'tripEndDate').attr('required', 'true');
var tripEndLabel = $('<label>').attr('for', 'tripEndDate').text('Trip End');
var tripBtn = $('<button>').attr('id', 'tripBtn').text('Plan Trip!');

$('body').append(tripInput);
tripInput.append((tripInputDiv1.append(tripLocation, formLine.clone(), locationLabel)));
tripInput.append((tripInputDiv2.append(tripStartDate, formLine.clone(), tripStartLabel)));
tripInput.append((tripInputDiv3.append(tripEndDate, formLine.clone(), tripEndLabel)));
tripInput.append(tripBtn, closeBtn);

function populateUpcomingTripsDisplay (){ 
    $(upcomingTripsDisplay).html('');
    upcomingTripsDisplay.append(upcomingTripsHeader);
    if (localStorage.trips){
        JSON.parse(localStorage.trips).data.forEach(item => {
            $(upcomingTripsDisplay).append( $('<p>').attr('id', item.tripID).text(item.tripID));
        });
    } else {
        $(upcomingTripsDisplay).append( $('<p>').text('No Upcoming Trips Planned'))
    }
}
populateUpcomingTripsDisplay();

newTripBtn.on('click', event=>{
    event.preventDefault();
    $('body').toggleClass('newTripModal');
});
closeBtn.on('click', event=>{
    $('body').toggleClass('newTripModal');
})
// tripBtn.on('click', event=>{
//     event.preventDefault();
//     //populateUpcomingTripsDisplay();
//     $('body').toggleClass('newTripModal'); // remove later
// })
$("#tripBtn").on("click", function(event) {
    event.preventDefault();
    getTripID(event);
    getDatesArray(event);
    var tripsArr = [];
    if (localStorage.trips) {
        tripsArr = JSON.parse(localStorage.trips).data;
    }
    var trip = {
                tripID : tID,
                tripDates : tDates
                }
    tripsArr.push(trip);
    var data  = {
        data: tripsArr
    };
    localStorage.setItem("trips", JSON.stringify(data));
    $('body').toggleClass('newTripModal');
    populateUpcomingTripsDisplay();
})


});
