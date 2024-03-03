// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

// Middleware
app.use(bodyParser.json());

// Routes
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
// Include other route files as needed

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
// Use other route files as needed

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
