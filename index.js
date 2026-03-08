// Import the built-in http module from Node.js
const http = require('http');

// Define the port number where the server will listen for incoming requests
// We use 3000 as a common default for local development
const PORT = 3000;

/**
 * The request handler function is called every time a request hits the server.
 * It receives two arguments: the request object (req) and the response object (res).
 * 
 * @param {http.IncomingMessage} req - Represents the incoming request
 * @param {http.ServerResponse} res - Represents the outgoing response
 */
const requestHandler = (req, res) => {
    // Log the incoming request method (e.g., GET) and URL to the console
    console.log(`[${new Date().toISOString()}] Received ${req.method} request for: ${req.url}`);

    // Set the HTTP response status code to 200, which means "OK"
    res.statusCode = 200;

    // Set the "Content-Type" header so the client knows what kind of data we're sending
    // In this case, we are sending simple plain text
    res.setHeader('Content-Type', 'text/plain');

    // Write a message and end the response. 
    // This sends the data back to the client and closes the connection.
    res.end('Hello! This is a simple Node.js server running in index.js.\n');
};

// Create the HTTP server using the requestHandler function defined above
const server = http.createServer(requestHandler);

// Start the server and make it listen for connections on the specified port.
// The callback function runs once the server is successfully listening.
server.listen(PORT, () => {
    console.log(`Server is successfully running and listening on http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop the server.');
});
