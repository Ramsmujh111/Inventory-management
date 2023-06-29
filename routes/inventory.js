const express = require('express');
const routes = express.Router();
const ControllerInventory = require('../controller/Invetory');

routes.post('/api/post' , ControllerInventory.PostApiCall);
module.exports = routes;
