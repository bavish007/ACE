const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const HOST = 'localhost';

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.txt': 'text/plain',
};

const serveFile = (res, filePath, contentType, statusCode = 200) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('500 - Internal Server Error');
    } else {
      res.writeHead(statusCode, { 'Content-Type': contentType });
      res.end(data);
    }
  });
};

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  let pathname = parsedUrl.pathname;
  console.log(`[${new Date().toISOString()}] ${req.method} ${pathname}`);

  // Static assets
  if (pathname.startsWith('/public/')) {
    const filePath = path.join(__dirname, pathname);
    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'application/octet-stream';
    return serveFile(res, filePath, contentType);
  }

  // Routing
  let page = '';
  switch (pathname) {
    case '/':
      page = 'index.html';
      break;
    case '/about':
      page = 'about.html';
      break;
    case '/products':
      page = 'products.html';
      break;
    case '/contact':
      page = 'contact.html';
      break;
    default:
      page = '404.html';
      res.statusCode = 404;
  }
  const filePath = path.join(__dirname, 'pages', page);
  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'text/html';
  serveFile(res, filePath, contentType, res.statusCode || 200);
});

server.listen(PORT, HOST, () => {
  console.log(`\n🎉 Node.js Custom Server running at http://${HOST}:${PORT}\n`);
}); 