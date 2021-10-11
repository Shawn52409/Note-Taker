// Require Dependencies
const fs = require('fs');
const express = require("express");

// Create router routes
const htmlRouter = require('./routes/htmlRouter');
const apiRouter = require('./routes/apiRouter');

// Port setting
const PORT = process.env.PORT || 3001;

// Initialize express app
const app = express();

// Parse the data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set static folder
app.use(express.static('public'));

// Router
app.use('/api', apiRouter);
app.use('/', htmlRouter);



// Listener
app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`)
});