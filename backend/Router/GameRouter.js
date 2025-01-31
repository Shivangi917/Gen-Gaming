const express = require('express');
const Router = express.Router();
const { GameController } = require('../Controller/GameController');

Router.get('/', GameController);

module.exports = Router;