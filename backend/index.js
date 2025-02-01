const express = require('express');
const cors = require('cors');
const gameRoutes = require('./Router/GameRouter');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello');
});

app.use('/genres', gameRoutes);

const PORT = process.env.PORT || 5000; // Use environment variable for port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export for Vercel