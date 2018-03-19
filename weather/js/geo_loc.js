//functions will work together to get weather informaton for the current location
'use strict';



// Call the function to get our location
getGeoLocation();

// Gets longitude and latitude of current location
function getGeoLocation() {
     locating.innerHTML= "getting location";
    success.setAttribute("id", "fail");
    if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
   const LAT = position.coords.latitude;
   const LONG = position.coords.longitude;

   // Combine the values
   const LOCALE = LAT + "," + LONG;
   console.log(`Lat and Long are: ${LOCALE}.`);
// Call getData function, send locale
   getData(LOCALE);
getHourly(LOCALE);
      getSat(LOCALE);
      getForecast(LOCALE);
      fail.setAttribute("id", "success");
      locating.setAttribute("id", "found");

  })
 } else {
  STATUS.innerHTML = "Your browser doesn't support Geolocation or it is not enabled!";
 } // end else
} // end getGeoLocation

// Get Data from API
