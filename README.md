# Node.js Promises Demo

This repository demonstrates the power of Node.js promises in different scenarios, with practical examples showing how to use promises for asynchronous operations in web applications.

## Examples Included

### 1. Parallel File Processing (`server.js`)

Demonstrates using `Promise.all` to read multiple HTML files simultaneously and combine them into a single response.

```javascript
// Read multiple files in parallel
const [header, content, footer] = await Promise.all([
  fs.readFile("header.html", "utf8"),
  fs.readFile("content.html", "utf8"),
  fs.readFile("footer.html", "utf8"),
]);
```

### 2. Promise Chaining for User Registration (`registration.js`)

Shows how to chain promises for a multi-step process like user registration.

```javascript
db.createUser({ name: "John", email: "john@example.com" })
  .then((user) => db.createProfile(user.id))
  .then((profile) => db.sendWelcomeEmail(profile.userId))
  .then(() => {
    // Handle success
  })
  .catch((error) => {
    // Handle any error in the chain
  });
```

### 3. Error Handling with API Fallback (`errorHandling.js`)

Demonstrates resilient API calls with fallback patterns.

```javascript
const data = await fetchData("https://primary-api.example/data").catch(() =>
  fetchData("https://fallback-api.example/data")
);
```

## Key Promise Features Demonstrated

- **Parallel Execution** with `Promise.all`
- **Sequential Chaining** for dependent operations
- **Error Handling** with centralized `.catch()`
- **Fallback Patterns** for resilient API calls
- **Async/Await Syntax** for cleaner asynchronous code

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run any of the example servers:
   ```bash
   node server.js
   node registration.js
   node errorHandling.js
   ```
4. Visit `http://localhost:3000` in your browser

## Testing the Examples

### Example 1 (Parallel File Processing)

- Visit `http://localhost:3000` to see the combined HTML content

### Example 2 (User Registration)

- Visit `http://localhost:3000/register` to test the registration flow
- Modify the mock database functions to simulate success or failure

### Example 3 (API Fallback)

- Visit `http://localhost:3000/data` to test the API fallback
- Modify the URLs to test different scenarios:
  - Both APIs working
  - Primary API failing, fallback succeeding
  - Both APIs failing

## Why Promises?

Promises help avoid "callback hell" and make asynchronous code more maintainable through:

- Clear chaining structure
- Centralized error handling
- Better readability
- Easier debugging
- Improved flow control

These patterns are particularly useful for:

- Database operations
- API calls
- File processing
- Complex workflows
- Error recovery scenarios

## License

MIT
