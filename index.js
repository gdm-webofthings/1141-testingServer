// State 0 = reset
// State 1 = active
// state 2 - 99 = extra states if neccesary
// State 100 = solved

var osc = require("osc");
const { listener } = require("./api/listener");
const { clients } = require("./vars/clients");
require("dotenv").config();

// declare UDP Port
var udpPort = (module.exports = new osc.UDPPort({
  localAddress: process.env.LOCAL_ADDRESS,
  localPort: process.env.LOCAL_PORT,
  metadata: true,
}));

// init listener for messages and errors
listener(udpPort);

// Sendmessage function, use when no default state is available
const sendMessage = (state = 0, client) => {
  const { ipAddress, port } = clients[client];

  udpPort.send(
    {
      address: "/servermessage",
      args: {
        type: "i",
        value: state,
      },
    },
    ipAddress,
    port
  );
};

// Default state functions
const deactivateClient = (client) => {
  sendMessage(0, client);
};
const activateClient = (client) => {
  sendMessage(1, client);
};
const solveClient = (client) => {
  sendMessage(100, client);
};

// When the port is ready, send an OSC message
// change the defaultstate function below to whatever you like,
// will run when you restart the server
udpPort.on("ready", function () {
  activateClient("client-01");
});

// Open the socket.
udpPort.open();
console.log("Server running");
