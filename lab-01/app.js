// Import Express
const express = require('express');

// Create Express application
const app = express();

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to Node.js and Express Server!');
});

// About route
app.get('/about', (req, res) => {
    res.json({
        name: 'Navya Reddy',
        section: 'Your Section'
    });
});

// Time route
app.get('/time', (req, res) => {
    res.send(new Date().toString());
});

// 404 route
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});