const express = require('express');
const routes = express.Router();
const ControllerInventory = require('../controller/Invetory');

routes.post('/api/post' , ControllerInventory.PostApiCall);
routes.post('/' , ControllerInventory.add)
module.exports = routes;
