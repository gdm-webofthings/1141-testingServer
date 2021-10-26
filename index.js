// State 0 = reset
// State 1 = active
// State 2 - 99 = extra states if neccesary
// State 100 = solved

var osc = require("osc");
const { listener } = require("./api/listener");
const {
  sendMessage,
  activateClient,
  solveClient,
  checkLiveClient,
  deactivateClient,
} = require("./api/sendFunctions");
require("dotenv").config();

// Declare UDP Port and make globally available
global.udpPort = module.exports = new osc.UDPPort({
  localAddress: process.env.LOCAL_ADDRESS,
  localPort: process.env.LOCAL_PORT,
  metadata: true,
});

// Init listener for messages and errors
listener();

// When the port is ready, send an OSC message
// change the defaultstate function below to whatever you like,
// will run when you restart the server
udpPort.on("ready", function () {
  setInterval(() => {
    checkLiveClient("client-01");
    console.log("message send!");
  }, 3000);
});

// Open the socket.
udpPort.open();
console.log("Server running");
