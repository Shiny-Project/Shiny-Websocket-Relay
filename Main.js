var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');

var port = 3737; // 监听端口设置

app.listen(port);

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

console.log('Listening on localhost:' + port);

