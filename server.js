const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware to serve static files from the 'public' folder
app.use(express.static('public'));

// Middleware to parse incoming JSON data
app.use(express.json());
app.use(cors());

// Route to handle form submission
app.post('/submit', (req, res) => {
    const userData = req.body;

    if (!userData || !userData.name || !userData.email || !userData.carPreference) {
        return res.status(400).json({ message: 'Invalid input data' });
    }

    const filePath = path.join(__dirname, 'user_data.txt');
    const dataToWrite = `Name: ${userData.name}, Email: ${userData.email}, Car Preference: ${userData.carPreference}\n`;

    fs.appendFile(filePath, dataToWrite, (err) => {
        if (err) {
            console.error('Error saving data to file:', err);
            return res.status(500).json({ message: 'Error saving data' });
        }
        res.status(200).json({ message: 'Data saved successfully' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
