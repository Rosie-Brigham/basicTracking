// When the page is loaded
$(document).ready(function() {
  $("#watch-location").click(function(e) {
    e.preventDefault();
    watchLocation()
  });
  $("#get-location").click(function(e) {
    e.preventDefault();
    getLocation();
  });
});

// tings

function watchSuccess(position){
  console.log("Tracking was successful!");
  var userLat = position.coords.latitude;
  var userLon = position.coords.longitude;

  $("p#message").html("Your geolocation from watch position is "
                      + userLat + " lattitude and " + userLon + " longitude")
}

function watchLocation(){
  if (navigator.geolocation) {
    $("p#message").html("calculating position") 
   navigator.geolocation.watchPosition(watchSuccess) 
  } else {
    $("p#message").html("Woops, Geolocation is not supported by this browser.")
  }
}

function getLocation() {
   if (navigator.geolocation) {
      $("p#message").html("calculating position")  
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      $("p#message").html("Damm, Geolocation is not supported by this browser.")
    }
}
function showPosition(position) {
  $("p#message").html("Your geolocation from get location is <br> Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude);
}
