
// John, this code below has where if we type on a name of a place it will pull the longitude and latitude. 


         //Kinds of places you can search for 
//tourism 
//restaurants
//cafe
//bars
//adult
//shops
//amusements
//natural
//historic
//religion
//architecture
//cultural


$(document).ready(function () {

    $('#populateList').click(function () {

        // var queryURL = "https://api.opentripmap.com/0.1/en/places/geoname?name=Nashville&apikey=5ae2e3f221c38a28845f05b6f0fdbe212d0570adee77bc404c19df22";
        // $.ajax({
        //     url: queryURL,
        //     method: "GET"
        // }).then(function (response) {

            // // Printing the entire object to console   response.lon 36.16589 response.lat -86.78444
            // console.log(response);
            

            var long = -86.7844;
            var lata = 36.1658;
            var kindOf = "historic";
            var limitOf = "40";
            var limitDistance = 2000;

            var locationURL = "https://api.opentripmap.com/0.1/en/places/radius?lang=en&radius=" + limitDistance + "&lon=" + long + "&lat=" + lata + "&kinds=" + kindOf + "&limit=" + limitOf + "&apikey=5ae2e3f221c38a28845f05b6f0fdbe212d0570adee77bc404c19df22";

            $.ajax({
                url: locationURL,
                method: "GET"
            }).then(function (locationResponse) {
                console.log(locationResponse);
                console.log(locationResponse.features.length);




                for (var i = 0; i < locationResponse.features.length; i++){
                    if (locationResponse.features[i].properties.name !== ""){
                        $('h3').append(locationResponse.features[i].properties.name + "<br><br>")
                    }

                }

            })
         




    });
});


        //http://api.opentripmap.com/0.1/en/places/xid/Q372040?apikey=5ae2e3f221c38a28845f05b6f0fdbe212d0570adee77bc404c19df22
