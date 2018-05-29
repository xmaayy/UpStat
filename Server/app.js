const dgram = require('dgram');

const socket = dgram.createSocket('udp4');

socket.on('message', (message, rinfo) => {
    console.log(`${rinfo.address}: ${message.toString()}`);
});
socket.bind(5999);

