let app = require('http').createServer(handler);
let io = require('socket.io')(app);
let fs = require('fs');

let port = 3737; // 监听端口设置
let serverAddress = '::ffff:106.186.22.246';

app.listen(port);

function handler (req, res) {

}

io.on('connection', function (socket) {
    console.log('Client connected. From: ' + socket.handshake.address);
    // if (socket.handshake.address !== serverAddress){
    //     return;
    // }
    socket.on('event', function (data) {
        console.log('Message received: ' + data + 'From: ' + socket.handshake.address);
        socket.broadcast.emit('event', data);
        console.log('Message broadcasted.')
    });
});

console.log('Listening on localhost:' + port);

