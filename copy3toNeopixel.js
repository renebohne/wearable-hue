//copies the state of light 3 to the neopixels

var hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState;


var ws281x = require('rpi-ws281x-native');
var  pixelData = new Uint32Array(3);

ws281x.init(3);

// ---- trap the SIGINT and reset before exit
process.on('SIGINT', function () {
  ws281x.reset();
  process.nextTick(function () { process.exit(0); });
});


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

function rgb2Int(r, g, b) {
  return ((r & 0xff) << 16) + ((g & 0xff) << 8) + (b & 0xff);
}


setInterval(function(){

  api.lightStatusWithRGB(3, function(err, result){
   var r = result.state.rgb[0];
   var g = result.state.rgb[1];
   var b = result.state.rgb[2];
 // console.log(result.name);
 // console.log("r "+r);
 // console.log("g "+g);
 // console.log("b "+b);
   pixelData[0] = rgb2Int(r,g,b);
   pixelData[1] = rgb2Int(r,g,b);
   pixelData[2] = rgb2Int(r,g,b);
   ws281x.render(pixelData);
   });	

// console.log('updated');
}, 5 * 1000);   

console.log('press CTRL+C to terminate.');
