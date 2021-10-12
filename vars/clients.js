// State 0 = reset
// State 1 = active
// state 2 - 99 = extra states if neccesary
// State 100 = solved

let clients = {
  "client-01": {
    name: "puzzlename",
    ipAddress: "192.168.1.31",
    port: 57112,
    state: 0,
  },
  "client-02": {
    name: "puzzlename",
    ipAddress: "0.0.0.0",
    port: 50000,
    state: 0,
  },
};

module.exports = {
  clients,
};
