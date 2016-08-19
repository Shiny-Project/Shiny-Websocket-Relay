var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(3737);

function handler (req, res) {

}

io.on('connection', function (socket) {
    console.log('Client connected.');
    socket.on('event', function (data) {
        console.log('Message received: ' + data);
        socket.broadcast.emit('event', data);
        console.log('Message broadcasted.')
    });
});

console.log('Listening on localhost:3737');

