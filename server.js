const express = require('express');
const app = express();
const PORT = 3000;

// This is your first "Route"
// When someone visits your website, they get this message.
app.get('/', (req, res) => {
  res.send('<h1>Success! Your Backend is running.</h1><p>Welcome to the quiet life.</p>');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
