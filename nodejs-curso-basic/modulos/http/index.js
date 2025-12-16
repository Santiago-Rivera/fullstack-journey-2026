const http = require('http');

const colors = require('colors');

const handleServer = (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
};

const server = http.createServer(handleServer);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`.green);
});