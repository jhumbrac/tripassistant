

var tripInput = $('<form>').attr('id', 'tripInput');
var tripLocation = $('<input>').attr('type', 'text').attr('id', 'tripLocation');
var locationLabel = $('<label>').attr('for', 'tripLocation').text('Where are you going?');
var tripStartDate = $('<input>').attr('type', 'date').attr('id', 'tripStartDate');
var tripStartLabel = $('<label>').attr('for', 'tripStartDate').text('Trip Start');
var tripEndDate = $('<input>').attr('type', 'date').attr('id', 'tripEndDate');
var tripEndLabel = $('<label>').attr('for', 'tripEndDate').text('Trip End');
var tripBtn = $('<button>').text('Plan Trip!');

$('body').append(tripInput);
tripInput.append(tripLocation, locationLabel, tripStartDate, tripStartLabel, tripEndDate, tripEndLabel, tripBtn);