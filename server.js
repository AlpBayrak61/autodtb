const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to handle JSON requests
app.use(express.json());
app.use(express.static('public'));  // Serve static files from the 'public' directory

// Handle form submission
app.post('/submit', (req, res) => {
    const userData = req.body;
    const filePath = path.join(__dirname, 'user_data.txt');

    // Format data to store in the text file
    const dataToWrite = `Name: ${userData.name}, Email: ${userData.email}, Car Preference: ${userData.carPreference}\n`;

    // Append the data to the text file
    fs.appendFile(filePath, dataToWrite, (err) => {
        if (err) {
            console.error('Error saving data to file:', err);
            res.status(500).send('Error saving data');
        } else {
            res.status(200).send('Data saved successfully');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
