const http = require('http');
const routes = require('./routes');

// This is the raw logic on which node.js works on but this is so complex. so instead of this we use express 

// this will create a server so we can listen to a server
const server = http.createServer(routes);

// server to listen at port 3000
server.listen(3000)