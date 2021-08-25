const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", (data) => {
    //handle the connect event
    console.log("Successfully connected to game server");
    conn.write("Name: SHL");
    conn.write("Say: Sharon is here!");
  });

  return conn;
};

module.exports = {
  connect,
};
