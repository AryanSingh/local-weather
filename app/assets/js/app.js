  var Celsius =0;
  var Fahrenheit =0;
$(document).ready(function(){
   lat =0;
   lon = 0;
  var ural ="";
  var appId = "45e37fb5d84a5a7b45514f289d76575f";

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
          Fahrenheit = dataWegetfromjsonp.currently.apparentTemperature;
          Celsius = Math.round(((dataWegetfromjsonp.currently.apparentTemperature -32)/1.8)*100)/100;
          $("#temp").html(Fahrenheit+ " &deg;");
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
      $("#temp").html(Celsius + " &deg;");
      $("#unit").html("C");
    }
    else{
      $("#temp").html(Fahrenheit + " &deg;");
      $("#unit").html("F");
    }
  });

});

// console.log(navigator.geolocation.getCurrentPosition);;