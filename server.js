const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async (req, res) => {
  if (req.url === '/') {
    try {
      // Read multiple files in parallel
      const [header, content, footer] = await Promise.all([
        fs.readFile('header.html', 'utf8'),
        fs.readFile('content.html', 'utf8'),
        fs.readFile('footer.html', 'utf8')
      ]);

      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(`
        ${header}
        ${content}
        ${footer}
      `);
    } catch (error) {
      res.writeHead(500);
      res.end('Error loading content');
    }
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});