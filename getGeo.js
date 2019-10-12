/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function getGeo(lat, lon){
  var statusR = new XMLHttpRequest();
  statusR.onreadystatechange = function() {
    console.log(statusR.response)
    if (statusR.readyState == 4 && statusR.responseText != 'error') {

    }
  }
  statusR.open("GET", 'https://us1.locationiq.com/v1/reverse.php?key=cbe1019cc2965e&lat='+lat+'&lon='+lon+'&format=json', true);
  statusR.send(null);  
}

function getGeoHERE(latlon){
  var statusR = new XMLHttpRequest();
  statusR.onreadystatechange = function() {
    console.log(statusR.response)
    if (statusR.readyState == 4 && statusR.responseText != 'error') {

    }
  }
  statusR.open("GET", 'https://reverse.geocoder.api.here.com/6.2/reversegeocode.json?prox='+latlon+'&mode=retrieveAddresses&maxresults=1&gen=9&app_id=B4reavFnn0uYvunnrT5F&app_code=nsgciwl5LqSQPG0AbV0meg', true);
  statusR.send(null);  
}

