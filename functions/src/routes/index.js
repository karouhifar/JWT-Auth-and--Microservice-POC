const express = require('express');
const passport = require('passport');

const { user } = require('../controllers/auth/users');
const { getPost } = require('../controllers/posts/get');
// const authenticateToken = require('../middlewares/authenticateToken');
const { version, author, description } = require('../../package.json');
const hash = require('../middlewares/hash');
const authorization = require('../utils/auth');
const routes = express.Router();

routes.use(express.json());
routes.use(passport.initialize());
passport.use(authorization());
routes.get('/', (req, res) => {
    res.status(200).json({ version, author, description });
});

routes.get(
    '/post',
    passport.authenticate('bearer', { session: false }),
    getPost
);

routes.post('/login', hash, user);

module.exports = routes;
