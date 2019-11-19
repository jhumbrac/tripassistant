var closeBtn = $('<div>').attr('class', 'closeBtn').text('X');

// new trip input
var tripInput = $('<form>').attr('id', 'tripInput');
var tripLocation = $('<input>').attr('type', 'text').attr('id', 'tripLocation');
var locationLabel = $('<label>').attr('for', 'tripLocation').text('Where are you going?');
var tripStartDate = $('<input>').attr('type', 'date').attr('id', 'tripStartDate');
var tripStartLabel = $('<label>').attr('for', 'tripStartDate').text('Trip Start');
var tripEndDate = $('<input>').attr('type', 'date').attr('id', 'tripEndDate');
var tripEndLabel = $('<label>').attr('for', 'tripEndDate').text('Trip End');
var tripBtn = $('<button>').text('Plan Trip!');

$('body').append(tripInput);
tripInput.append(tripLocation, locationLabel, tripStartDate, tripStartLabel, tripEndDate, tripEndLabel, tripBtn, closeBtn);

// google places api
var googleApiKey = 'AIzaSyA-b6Ob-hdWMHrJO5fp-G5GCm76jeHqGRc';


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

newTripBtn.on('click', event=>{
    event.preventDefault();
    $('body').toggleClass('newTripModal');
});
closeBtn.on('click', event=>{
    $('body').toggleClass('newTripModal');
})