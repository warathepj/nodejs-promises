const https = require('https');
const http = require('http');

function fetchData(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

http.createServer(async (req, res) => {
  if (req.url === '/data') {
    try {
      // Try primary API, fallback to secondary
    //   const data = await fetchData('https://primary-api.example/data')
    //     .catch(() => fetchData('https://fallback-api.example/data'));

        // Change the URLs to test endpoints
// const data = await fetchData('https://jsonplaceholder.typicode.com/todos/1')
// .catch(() => fetchData('https://jsonplaceholder.typicode.com/posts/1'));

// const data = await fetchData('https://invalid-primary-url.com')
//   .catch(() => fetchData('https://jsonplaceholder.typicode.com/posts/1'));

  const data = await fetchData('https://invalid-primary-url.com')
  .catch(() => fetchData('https://invalid-fallback-url.com'));
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(`
        <html>
          <body>
            <h1>API Data:</h1>
            <pre>${data}</pre>
          </body>
        </html>
      `);
    } catch (error) {
      res.writeHead(500);
      res.end('<h1>Failed to fetch data</h1>');
    }
  }
}).listen(3000);