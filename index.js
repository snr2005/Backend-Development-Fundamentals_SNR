const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Route 1: Home (Welcome message)
app.get('/', (request, response) => {
  response.send('Welcome to the Lab 1 Express Web Server!');
});

// Route 2: Student details (JSON response)
app.get('/about', (request, response) => {
  response.json({
    name: 'R SATHYANARAYANA',
    regNo: '252U1R1209',
    section: 'CSE-2D(214)',
    course: 'Backend Development Fundamentals'
  });
});

// Route 3: Today's date (NxtWave slide format)
app.get('/date', (request, response) => {
  let date = new Date();
  response.send(`Today's date is ${date}`);
});

// Route 4: Current date and time
app.get('/time', (request, response) => {
  const currentDate = new Date();
  response.json({
    date: currentDate.toLocaleDateString(),
    time: currentDate.toLocaleTimeString()
  });
});

// Route 5: Basic 404 handler for unknown paths
app.use((request, response) => {
  response.status(404).json({
    error: 'Not Found',
    message: 'The requested route does not exist.'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
