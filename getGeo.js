/* 
  getGeo using location IQ
  getGeoHERE using here maps

  ## here maps is less accurate but use it for sake of project
  
  //all requests are simple ajax requests
  
  ASYNC so place callback function which will receive a parsed JSON object
  
  E.G getGeoHERE('-26.150353,27.932031' ,function(obj){ console.log(obj) } )
  
  getGeo(-26.150353, 27.932031, function(obj){ console.log(obj) } )
  
*/

function getGeo(lat, lon , callback){
  var statusR = new XMLHttpRequest();
  statusR.onreadystatechange = function() {
    console.log(statusR.response)
    if (statusR.readyState == 4 && statusR.responseText != 'error') {
      callback(JSON.parse(statusR.response))
    }
  }
  statusR.open("GET", 'https://us1.locationiq.com/v1/reverse.php?key=cbe1019cc2965e&lat='+lat+'&lon='+lon+'&format=json', true);
  statusR.send(null);  
}

function getGeoHERE(latlon, callback){
  var statusR = new XMLHttpRequest();
  statusR.onreadystatechange = function() {
    console.log(statusR.response)
    if (statusR.readyState == 4 && statusR.responseText != 'error') {
      callback(JSON.parse(statusR.response))
    }
  }
  statusR.open("GET", 'https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox='+latlon+'&mode=retrieveAddresses&maxresults=1&gen=9&app_id=B4reavFnn0uYvunnrT5F&app_code=nsgciwl5LqSQPG0AbV0meg', true);
  statusR.send(null);  
}

