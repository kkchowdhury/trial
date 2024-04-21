const express = require('express');
const app = express();
const port = 3000;

// Middleware to restrict access to private network
app.use((req, res, next) => {
  const allowedIPs = ['10.0.0.1', '127.0.0.1', '::1'];
 // Replace with your private network IPs
  if (allowedIPs.includes(req.ip)) {
    next();
  } else {
    res.status(403).send('Access denied');
  }
});

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the private backend!' });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
