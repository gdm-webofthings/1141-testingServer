const listener = (udpPort) => {
  // Listen for incoming OSC messages.
  udpPort.on("message", function (oscMsg, timeTag, info) {
    console.log("An OSC message just arrived!", oscMsg);
    console.log("Remote info is: ", info);
  });

  udpPort.on("error", function (err) {
    console.log(err);
  });
};

module.exports = {
  listener,
};
