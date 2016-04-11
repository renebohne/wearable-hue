var hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState;

var displayResult = function(result) {

	if(result.state.on)
	{
		api.setLightState(3, state.off()).done();
		console.log("now off");
	}
	else
	{
		api.setLightState(3, state.on()).done();
		console.log("now on");
	}


    //console.log(JSON.stringify(result.state, null, 2));
};

var host = "192.168.10.106",
    username = "PT-NTFKdCtbUh-RDwPHYG9rfQiv2ScRxHoxJhZmK",
    api = new HueApi(host, username),
    state;

state = lightState.create();

// --------------------------
// Using a promise

api.lightStatus(3)
    .then(displayResult)
    .done();
