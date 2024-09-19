const express = require('express');
const app = express();
const cors = require("cors")
const userRoutes = require('./routes/user'); // Import the signup route
const lawEnforcementRouter = require("./routes/law")
const alertRouter = require('./routes/alert'); // Adjust path as needed
app.use(cors())
app.use(express.json()); // Middleware to parse JSON bodies

app.use('/api', alertRouter);
app.use('/api/user', userRoutes ); // Use the user route
app.use('/api/law-enforcement', lawEnforcementRouter); // Law enforcement route



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
