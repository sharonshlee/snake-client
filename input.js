// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  //http://www.endmemo.com/unicode/ascii.php
  // \u0003 maps to ctrl+c input
  if (key === "\u0003") {
    process.exit();
  }

  //keys: w s a d
  if (key === "\u0077") {
    connection.write("Move: up");
  } else if (key === "\u0061") {
    connection.write("Move: left");
  } else if (key === "\u0073") {
    connection.write("Move: down");
  } else if (key === "\u0064") {
    connection.write("Move: right");
  }
};

module.exports = {
  setupInput,
};
