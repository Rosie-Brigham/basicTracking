// When the page is loaded
$(document).ready(function() {
  $("form").hide();
  $("p#message").html("Please enable location services");
  watchUser = navigator.geolocation.watchPosition(success);
  $("form").submit(function() {
    $.ajax({
      url: $("form").attr("action"),
      data: { username: $("input[name=username]").val() },
      success: function(result){
          $("p#message").html("Hello there " + result.username + "! Number of checkins: " + result.checkIns);
          $("form").hide();
          if (typeof watchUser != "undefined")
              navigator.geolocation.clearWatch(watchUser);
      }
    });
    event.preventDefault();
  })
});

function success(position){
  console.log("Tracking was successful!");
  var userLat = position.coords.latitude;
  var userLon = position.coords.longitude;
  var targetLat = 40.7479095;
  var targetLon = -73.9841027;
  var distance = calculateDistance(userLat, userLon, targetLat, targetLon);
  var radius = 0.2; // in miles

  $("p#message").html("your geolocation from watchPosition is "
                      + userLat + " lattitude and " + userLon + "longitude")
}
