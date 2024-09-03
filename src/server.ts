console.log('project working');

// index.ts
import http from 'http';

const server = http.createServer((req, res) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, TypeScript in Node.js!');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});