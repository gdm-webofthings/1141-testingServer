const { clients } = require("../vars/clients");

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
const checkLiveClient = (client) => {
  sendMessage(999, "client-01");
};

module.exports = {
  sendMessage,
  deactivateClient,
  activateClient,
  solveClient,
  checkLiveClient,
};
