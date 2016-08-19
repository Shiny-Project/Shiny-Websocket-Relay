var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(3737);

function handler (req, res) {

}

io.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('event', function (data) {
        socket.emit('event', data);
    });
});

console.log('Listening on localhost:3737');

