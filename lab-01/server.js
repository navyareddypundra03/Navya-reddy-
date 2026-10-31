// Import the HTTP module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {

    // Send response
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello');

});

// Start server on port 3000
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});