$(document).ready(function(){
// landing page dom
var logo = $('<img>').attr('src', 'optimisedLogo.svg').attr('class', 'logo');
var welcomePage = $('<div>').attr('id', 'welcomePage');
var welcomeText = $('<h1>').text('Plan your trip');
var welcomeSubText = $('<p>').text('Click to start a new trip or select from one of your upcoming trips');
var newTripBtn = $('<button>').attr('id', 'newTripBtn').text('Create a new itinerary');
var upcomingTripsBtn = $('<button>').attr('id', 'upcomingTripsBtn').text('See upcoming trips');
var upcomingTripsDisplay = $('<div>').attr('id', 'upcomingTripsDisplay');
var upcomingTripsHeader = $('<h2>').attr('id', 'upcomingTripsHeader').text('Upcoming Trips');
$('body').prepend(logo);
$('body').prepend(welcomePage);
welcomePage.append(welcomeText, welcomeSubText, newTripBtn, upcomingTripsBtn);

$('body').prepend(upcomingTripsDisplay);
$('body').prepend(logo);
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
var tripLocationValue;
var lata;
var long;

$('body').append(tripInput);
tripInput.append((tripInputDiv1.append(tripLocation, formLine.clone(), locationLabel)));
tripInput.append((tripInputDiv2.append(tripStartDate, formLine.clone(), tripStartLabel)));
tripInput.append((tripInputDiv3.append(tripEndDate, formLine.clone(), tripEndLabel)));
tripInput.append(tripBtn, closeBtn);

//Trip Page
var tripPage = $('<div>').attr('id', 'tripPage');
var backBtn = $('<button>').attr('class', 'backBtn').html('&larr; Back');
var searchActivitiesBtn = $('<button>').attr('class', 'searchActivitiesBtn').text('+');

function createTripPage(tripId) {
    var trips = JSON.parse(localStorage.trips);
    $('body').prepend(tripPage);
    $('body').attr('class', 'tripPageModal');
    tripPage.html('');
    tripPage.append(backBtn);
    tripPage.append($('<h2>').text(trips.data[tripId].tripName));
    
    datesActivities = trips.data[tripId].tripDates;
    datesActivities.forEach(item=>{
        var activitiesDiv = $('<div>');
        
        // item.activities.push({'bars':"red door"});
        tripPage.append(activitiesDiv);
        activitiesDiv.append(`<h3>${item.id}</h3>`);
        item.activities.forEach(activitiyItem=>{
            activitiesDiv.append($('<p>').text(activitiyItem.bars));
        });
        activitiesDiv.append(searchActivitiesBtn.clone());
    })
    
    localStorage.setItem('trips', JSON.stringify(trips));
}

function populateUpcomingTripsDisplay (){
    $('body').attr('class', 'upcomingTripsModal');
    $(upcomingTripsDisplay).html('');
    upcomingTripsDisplay.append(backBtn);
    upcomingTripsDisplay.append(upcomingTripsHeader);
    if (localStorage.trips){
        JSON.parse(localStorage.trips).data.forEach(item => {
            $(upcomingTripsDisplay).append( $('<p>').attr('id', item.tripID).text(item.tripID));
        });
    } else {
        $(upcomingTripsDisplay).append( $('<p>').text('No Upcoming Trips Planned'))
    }
}
function getLataLong(event) {
    tripLocationValue = tripLocation.val();

    var queryURL = `https://api.opentripmap.com/0.1/en/places/geoname?name=${tripLocationValue}&apikey=5ae2e3f221c38a28845f05b6f0fdbe212d0570adee77bc404c19df22`;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // Printing the entire object to console   response.lon 36.16589 response.lat -86.78444
        getTripID(event);
        getDatesArray(event);
        var tripsArr = [];
        if (localStorage.trips) {
            tripsArr = JSON.parse(localStorage.trips).data;
        }
        var trip = {
                    tripID : tID,
                    tripDates : tDates,
                    tripName : tripLocationValue,
                    lat : response.lat,
                    lon : response.lon
                    };
        console.log(trip);
        tripsArr.push(trip);
        var data  = {
            data: tripsArr
        };
        localStorage.setItem("trips", JSON.stringify(data));
        $('body').toggleClass('newTripModal');
        populateUpcomingTripsDisplay();
    });
}
    
//button functions
$(document).on('click', '.backBtn', event=>{
    event.preventDefault();
    $('body').attr('class', '');
})
newTripBtn.on('click', event=>{
    event.preventDefault();
    $('body').toggleClass('newTripModal');
});
closeBtn.on('click', event=>{
    $('body').toggleClass('newTripModal');
})
$("#tripBtn").on("click", function(event) {
    event.preventDefault();
    getLataLong(event);
})
$(upcomingTripsDisplay).on('click', 'p', event=>{
    var tripListArray = JSON.parse(localStorage.trips).data;
    var tripListId =  tripListArray.findIndex( x => x.tripID === event.target.id );
    createTripPage(tripListId);
})
$(document).on('click', '.searchActivitiesBtn', function(event) {
    event.preventDefault();
    createAForm();
})
$(document).on('click', '#upcomingTripsBtn', function(event) {
    event.preventDefault();
    populateUpcomingTripsDisplay();
});



});
