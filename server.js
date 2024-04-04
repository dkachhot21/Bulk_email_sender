const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');

const { specs, swaggerUi } = require('./swagger');

// Define the port for the server to listen on
const PORT = process.env.PORT || 3000;

//Imported Routes
const sendRoute = require('./routes/sendRoute.js')
const dbRoute = require('./routes/dbRoute.js');
const uploadRoute = require('./routes/uploadRoute.js');

//Imported DB connection Function
const connectDB = require('./config/connectDB.js');

//Initialize Express app
const app = express();

//Setting up views
app.set('view engine', 'ejs');
app.set('views', './views');

// Serve static files
app.use(express.static('public'));

//Middleware to parse JSON requests
app.use(express.json());

//Middleware to  enable CORS from any origin
app.use(cors());

//Connect to the DB
connectDB();

// Routes
app.use('/sendEmails', sendRoute);
app.use('/db', dbRoute);
app.use('/upload', uploadRoute);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
