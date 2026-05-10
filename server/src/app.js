require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./routes/user-routes');
const connectDB = require('./database/db');
app.use(express.json());
connectDB();


app.use('/api/users',userRoutes)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`server is now running at ${PORT}`);
    
})