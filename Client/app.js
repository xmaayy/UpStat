const dgram = require('dgram');

const socket = dgram.createSocket('udp4');
const message = new Buffer('Greetings')

function send(){
    socket.send(message, 5999, 'localhost')
}

setInterval(send, 5000);
send();