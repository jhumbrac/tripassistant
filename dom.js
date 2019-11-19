$(document).ready(function(){

// landing page dom
var welcomePage = $('<div>').attr('id', 'welcomePage');
var welcomeText = $('<h1>').text('Plan your trip');
var welcomeSubText = $('<p>').text('Click to start a new trip or select from one of your upcoming trips');
var newTripBtn = $('<button>').attr('id', 'newTripBtn').text('Create a new itinerary');
var upcomingTripsDisplay = $('<div>').attr('id', 'upcomingTripsDisplay');
var upcomingTripsHeader = $('<h2>').attr('id', 'upcomingTripsHeader').text('Upcoming Trips');
var upcomingTripsItems = $('<p>');

$('body').prepend(welcomePage);
welcomePage.append(welcomeText, welcomeSubText, newTripBtn, upcomingTripsDisplay);
upcomingTripsDisplay.append(upcomingTripsHeader);


// close button
var closeBtn = $('<p>').attr('class', 'closeBtn').append($('<span>').text('X'));


// new trip input
var tripInput = $('<form>').attr('id', 'tripInput');
var tripInputDiv1 = $('<div>');
var tripInputDiv2 = $('<div>');
var tripInputDiv3 = $('<div>');
var tripLocation = $('<input>').attr('type', 'text').attr('id', 'tripLocation');
var locationLabel = $('<label>').attr('for', 'tripLocation').text('Where are you going?');
var tripStartDate = $('<input>').attr('type', 'date').attr('id', 'tripStartDate');
var tripStartLabel = $('<label>').attr('for', 'tripStartDate').text('Trip Start');
var tripEndDate = $('<input>').attr('type', 'date').attr('id', 'tripEndDate');
var tripEndLabel = $('<label>').attr('for', 'tripEndDate').text('Trip End');
var tripBtn = $('<button>').attr('id', 'tripBtn').text('Plan Trip!');

$('body').append(tripInput);
tripInput.append((tripInputDiv1.append(tripLocation, locationLabel)));
tripInput.append((tripInputDiv2.append(tripStartDate, tripStartLabel)));
tripInput.append((tripInputDiv3.append(tripEndDate, tripEndLabel)));
tripInput.append(tripBtn, closeBtn);

newTripBtn.on('click', event=>{
    event.preventDefault();
    $('body').toggleClass('newTripModal');
});
closeBtn.on('click', event=>{
    $('body').toggleClass('newTripModal');
})
tripBtn.on('click', event=>{
    event.preventDefault();
    $('body').toggleClass('newTripModal'); // remove later
})



});