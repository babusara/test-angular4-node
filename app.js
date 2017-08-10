var http = require('http');
var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use('*',(req,res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
});

const port = process.env.PORT || '3001'
app.set('port', port);

const server = http.createServer(app);

server.listen(port,() => console.log('running'));


module.exports = app;
