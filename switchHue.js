//button is attached to pin GPIO 17 (pin 13)

var hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState;

var GPIO = require('onoff').Gpio,
  button = new GPIO(17, 'in', 'both');


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


function light(err, state) {
  // check the state of the button
  // 1 == pressed, 0 == not pressed
  if(state == 1) {
    // turn LED on    
api.setLightState(3, lstate.on(), function(e, result){
  console.log("now on");
});
  } else {
    // turn LED off
api.setLightState(3, lstate.off(), function(e, result){
  console.log("now off");
});
}
  
}

// pass the callback function to the
// as the first argument to watch()
button.watch(light);

