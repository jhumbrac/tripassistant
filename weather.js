//
//$(document).ready(function(){

//create weather button and on click run function. We need to create weather button in HTML.  
  //$('#checkWeather').click(function(){

//User will need to enter their tripLocation/destination which will be assigned an ID in HTML. 

//this is how the app will relay the destination information to the API
var tripLocation = 'Miami';//changed to a variable to test and make an easier call

//if the user leaves destination area blank, the app needs to alert them that a tripLocation has to be entered. This API will recognize location by name instead of requiring Lat and Lon.
    if(tripLocation !== ''){

//my location API link goes here. 
      var APIKey = "f32ce10fcdmshf3587c309489b02p1c2f4ejsn5886632c5b19";//my Rapid API Key

// Here we are building the URL we need to query the database.This originally had the wrong end tag. Needed to add "?q=" ***research***
      var queryURL = "https:community-open-weather-map.p.rapidapi.com/forecast/daily?q=" + tripLocation;
  
// We then created an AJAX call
      $.ajax({
        url: queryURL,
        method: "GET",
        headers: { //had to add in headers to retrieve information. ***research***
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
	        "x-rapidapi-key": APIKey
        }
      }).then(function(queryURL) {
        console.log("here is the data", queryURL)
        
      })
    };