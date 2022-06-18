const express = require('express');
const { user } = require('../controllers/auth/users');
const { getPost } = require('../controllers/posts/get');
const authenticateToken = require('../middlewares/authenticateToken');
const routes = express.Router();

routes.use(express.json());

routes.get('/post', authenticateToken, getPost);

routes.post('/login', user);

module.exports = routes;
