const http = require('http');

const server = http.createServer((req, res) => {
  // Handle Home page
  if (req.url === '/' || req.url === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to Node.js and Express Server!</h1>');
  } 
  // Handle About page
  else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ name: "Navya Reddy", section: "Your Section" }));
  } 
  // Handle Time page
  else if (req.url === '/time') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(new Date().toString());
  } 
  // Handle 404 Error page for any other route
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 - Page Not Found');
  }
});

// Use Render's dynamic port, falling back to 3000 locally
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
