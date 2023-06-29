const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();
const getConnect = require('./config/db');
const routesInventory = require('./routes/inventory');
// allow the json from the headers
app.use(express.json())
// for the db connections
getConnect();
// api calls 
app.use(routesInventory)


app.listen(PORT , () => {
    console.log(` Server is listing on the PORT=${PORT}`)
})




