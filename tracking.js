// When the page is loaded
$(document).ready(function() {
  $("#watch-location").click(function(e) {
    e.preventDefault();
    navigator.geolocation.watchPosition(success);
  });
  $("#get-location").click(function(e) {
    e.preventDefault();
    getLocation();
  });
});

// tings

function success(position){
  console.log("Tracking was successful!");
  var userLat = position.coords.latitude;
  var userLon = position.coords.longitude;

  $("p#message").html("Your geolocation from getPosition is "
                      + userLat.toFixed(3) + " lattitude and " + userLon.toFixed(3) + " longitude")
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      $("p#message").html("Damm, Geolocation is not supported by this browser.")
    }
}
function showPosition(position) {
  $("p#message").html("Your geolocation from watchPosition is <br> Latitude: " + position.coords.latitude.toFixed(3) +
    "<br>Longitude: " + position.coords.longitude.toFixed(3));
}