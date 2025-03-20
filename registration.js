const http = require('http');

// Mock database functions
const db = {
    createUser: (user) => Promise.reject(new Error('DB Connection Failed')),
//   createUser: (user) => Promise.resolve({ id: 1, ...user }),
  createProfile: (userId) => Promise.resolve({ userId, profile: 'active' }),
  sendWelcomeEmail: (email) => Promise.resolve('Email sent')
};

http.createServer(async (req, res) => {
  if (req.url === '/register') {
    // Promise chaining
    db.createUser({ name: 'John', email: 'john@example.com' })
      .then(user => db.createProfile(user.id))
      .then(profile => db.sendWelcomeEmail(profile.userId))
      .then(() => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Registration Complete!</h1>');
      })
      .catch(error => {
        res.writeHead(500);
        res.end('<h1>Registration Failed</h1>');
      });
  }
}).listen(3000);