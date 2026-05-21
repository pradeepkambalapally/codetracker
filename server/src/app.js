require('dotenv').config();
const express = require('express');
const { configureCors } = require('./config/cors');
const app = express();
const userRoutes = require('./routes/user-routes');
const connectDB = require('./database/db');
app.use(express.json());
const errorHandler = require("./middleware/error-handler");
connectDB();

app.use(configureCors());

app.use('/api/users',userRoutes)
app.use(errorHandler);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`server is now running at ${PORT}`);
    
})