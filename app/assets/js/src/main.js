$(document).ready(function(){
   lat =0;
   lon = 0;
  var ural ="";
  var appId = "45e37fb5d84a5a7b45514f289d76575f";
  // if(navigator.geolocation){
  //   navigator.geolocation.getCurrentPosition(function(position){
  //     $("#data").html("latitude:" + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
  //     lat = (position.coords.latitude);
  //     lon = (position.coords.longitude);
  //     ural += ("https://api.forecast.io/forecast/" + appId + "37.8267,-122.423") ;
  //     console.log(ural);
  //   });
  // };
  $.ajax({
    url: ural,
    dataType: 'jsonp',
    success: function(dataWeGotViaJsonp){
      console.log(dataWeGotViaJsonp);
    }
  })

  $.getJSON('http://ipinfo.io',function(data){
    console.log(data);
  });
  var data = "";
  $.ajax({
    url: 'http://ipinfo.io',
    dataType: 'jsonp',
    
    success: function(dataWeGotViaJsonp){
      $("#data").html(dataWeGotViaJsonp.city +", " + dataWeGotViaJsonp.country);
      data = dataWeGotViaJsonp.loc;
      lat = dataWeGotViaJsonp.loc.split(",")[0];
      lon = dataWeGotViaJsonp.loc.split(",")[1];
      console.log(lat);
      console.log(lon);
      $.ajax({
        url: "https://api.forecast.io/forecast/45e37fb5d84a5a7b45514f289d76575f/" + data,
        dataType: 'jsonp',
        success: function(dataWegetfromjsonp){
          console.log(dataWegetfromjsonp);
          $("#temp").html(dataWegetfromjsonp.currently.apparentTemperature + " &deg;");
          $("#unit").html("F");
          $("#summary").html(dataWegetfromjsonp.currently.summary);
        }
      });
    }
    
  });

  $("#unit").on("click", function(){
    var unit = $("#unit").html();
    console.log(unit);
    var content = $("#temp").html().split(" ")[0];
    content = parseInt(content);
    if(unit=="F"){
      $("#temp").html((content-32)/1.8 + " &deg;");
      $("#unit").html("C");
    }
    else{
      $("#temp").html((content*1.8 + 32) + " &deg;");
      $("#unit").html("F");
    }
  });

});

// console.log(navigator.geolocation.getCurrentPosition);