//button is attached to pin GPIO 17 (pin 13)

var hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState;


var displayResult = function(result) {
    console.log(result);
};

var displayError = function(err) {
    console.error(err);
};

var host = "192.168.10.106",
    username = "PT-NTFKdCtbUh-RDwPHYG9rfQiv2ScRxHoxJhZmK",
    api = new HueApi(host, username),
    lstate = lightState.create();

setInterval(function(){

  api.lightStatusWithRGB(10, function(err, result){
   api.setLightState(3, result.state).done();
   });	

  console.log('updated');
}, 15 * 1000);   
