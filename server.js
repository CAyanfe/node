// Import the 'http' module to create an HTTP server.
const http = require("http");

// Configure the HTTP server to respond with a simple HTML message.
const server = http.createServer((req, res) => {
  // Set the response header to indicate that we are sending HTML content.
  res.setHeader("Content-Type", "text/html");

  // Send the HTML response.
  res.end("<h1>Hello Node!!!!</h1>\n");
});

// Specify the port number the server should listen on (in this case, 3000).
const port = 3000;

// Start the server and listen on the specified port.
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
