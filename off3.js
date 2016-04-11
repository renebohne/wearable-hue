var hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState;

var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));
};

var host = "192.168.10.106",
    username = "PT-NTFKdCtbUh-RDwPHYG9rfQiv2ScRxHoxJhZmK",
    api = new HueApi(host, username),
    state;

state = lightState.create().off();

// --------------------------
// Using a promise
api.setLightState(3, state)
    .then(displayResult)
    .done();
