// PORT: 50542
// HOST: "135.23.222.131"
const net = require('net');

/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  conn.on('connect', (data) => {
    console.log("Successfully connected to game server.")
    conn.write("Name: SRH");
    // conn.write("Move: up");
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 50);
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 50);
  });

  return conn;
}

module.exports = {connect};

